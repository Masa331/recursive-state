import React from 'react';
import RecursiveElement from './RecursiveElement.js';

const mainElement = {
  name: 'main',
  elements: [
    { name: 'first level 1', elements: [] },
    { name: 'first level 2', elements: [] },
    { name: 'first level 3', elements: [
      { name: 'second level 1', elements: [] },
      { name: 'second level 2', elements: [] },
      { name: 'second level 3', elements: [] },
    ] },
    { name: 'first level 4', elements: [
      { name: 'second level 1', elements: [] },
      { name: 'second level 2', elements: [] },
      { name: 'second level 3', elements: [
        { name: 'third level 1', elements: [] },
        { name: 'third level 2', elements: [] },
        { name: 'third level 3', elements: [] },
      ] },
    ] }
  ]
};

function addCommonHandlers(element) {
  element.collapse = () => { element.collapsed = true };
  element.expand = () => { element.collapsed = false };

  element.elements.forEach((el) => {
    addCommonHandlers(el);
  });

  return element;
}

const enhanced = addCommonHandlers(mainElement);
console.log(enhanced)

function App() {
  return (
    <div>
      <RecursiveElement name={enhanced.name} elements={enhanced.elements} level={0} collapsed={enhanced.collapsed} />
    </div>
  );
}

export default App;
