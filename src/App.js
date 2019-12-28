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

function App() {
  return (
    <div>
      <RecursiveElement name={"foos"} />
    </div>
  );
}

export default App;
