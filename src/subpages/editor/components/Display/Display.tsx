import React from 'react';
import './Display.scss'
import { Editor, Node } from 'slate';
import { useSlate } from 'slate-react';


const Display = () => {
  const editor: Editor = useSlate();

  const valueToString = (): JSX.Element => {
    const blocks: Node[] = editor.children;
    const returnValue: any = blocks.map((node: any, index: number) => {
      return (
        <div className="block">
          <h4>Block #{index}:</h4>
          
            {node.children.map((child: any) => {
              return (
              <div className="child" >
                {JSON.stringify(child)}
              </div>
              );
              
            })}
        </div>
      );
    })
    



    return returnValue;

  }


  return (
    <div className="display__container">
      <div className="selection">
        <div className="item">
          <h4>Anchor: </h4>
          <span>{JSON.stringify(editor.selection?.anchor)}</span>
        </div>
        <div className="item">
        <h4>Focus: </h4>
        <span>{JSON.stringify(editor.selection?.focus)}</span>
        </div>
      </div>

      <div className="blocks">
        {valueToString()}
      </div>
    </div>
  )
}

export default Display;