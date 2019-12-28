import React, { Component } from 'react';

class RecursiveElement extends Component {
  render() {


    return (
      <span>{this.props.name}</span>
    );
  }
}

export default RecursiveElement;
