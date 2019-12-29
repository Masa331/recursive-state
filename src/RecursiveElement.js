import React, { Component } from 'react';

function repeat(str, times) {
  return (new Array(times + 1)).join(str);
};

class RecursiveElement extends Component {
  constructor(props) {
    super(props);

    this.state = { collapsed: false };
    this.childRefs = [];
  }

  spaces() {
    return <span dangerouslySetInnerHTML={{ __html: repeat("&nbsp;", this.props.level) }} />
  }

  collapse = () => {
    this.setState({ collapsed: true });
  };

  expand = () => {
    this.setState({ collapsed: false });
  };

  collapseChildren = () => {
    this.childRefs.forEach((ref) => {
      ref.current.collapse();
    });
  };

  expandChildren = () => {
    this.childRefs.forEach((ref) => {
      ref.current.expand();
    });
  };

  render() {
    let newRefs = [];
    const subElements = this.props.elements.map((element, index) => {
      const newRef = React.createRef();
      newRefs.push(newRef);
      return(<RecursiveElement key={ index } name={element.name} elements={element.elements} level={this.props.level + 2} ref={newRef} />);
    });
    this.childRefs = newRefs;

    let classes;
    if (this.state.collapsed) {
      classes = 'display-none';
    } else { // expanded
      classes = '';
    }

    return (
      <div>
        { this.spaces() } <span>{this.props.name}</span>

        <button onClick={this.expand}>+</button>
        <button onClick={this.collapse}>-</button>
        <button onClick={this.expandChildren}>++</button>
        <button onClick={this.collapseChildren}>--</button>

        <div className={classes}>
        { subElements }
        </div>
      </div>
    );
  }
}

export default RecursiveElement;
