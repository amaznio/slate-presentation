import React from 'react';
import { initialValue } from '../subpages/editor/initialValue';
import { simpleContent } from './simpleContent';

const col2 = ():JSX.Element => {
  return (
    <div className="infoColumn__container">
      <h3>How does Slate work?</h3>
      <p>Slate is pretty simple to understand.</p>
      <p>The content of the Slate editor is an array of nested objects.</p>
      <p>Slate calls these objects nodes. So the content of the Editor is of type Node[]. Slate provides the interface 'Node'.</p>
      <p>The heirachy of the nodes looks like: <code>Element -> Leaf</code></p>
      <p>An Element is a node that has a children property, which is array of child nodes.</p>
      <div className="codeblock">
        <pre>{JSON.stringify(simpleContent, null, 2)}</pre>
      </div>
      <p>The above cotent has 1 Element Node which contains 1 Leaf Node. This would be an example of having empty content. A document that is empty has one paragraph that has no characters typed so far.</p>
      <p>Slate has render functions for Elements and Leafs. They are commonly switch statements which read the type of an element and return a corresponding html element.</p>
      <p>You can give Elements any property you wish.</p>
      {/* <p>The following is the content of the Editor on the left side of the screen.</p>
      <pre className="codeblock">
        {initialValue.map((block: any) => {
          return JSON.stringify(block, null, 2)
        })}
      </pre> */}

    </div>
  );
} 

export default col2;