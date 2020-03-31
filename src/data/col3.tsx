import React from 'react';
import { example1 } from './col3examples';
const col3 = <div className="infoColumn__container">
<h3>Paths</h3>
<p>Paths are an important concept to understand in Slate.</p>
<p>Many built in functions use Paths to manipulate the nodes.</p>
<p>A path is an array <code>path: [0,0]</code> which contains the location of the node at the given index.</p>
<p>A node at path [0,2] would be the 3rd child of the 1st node.</p>
<p>A node at path [1,1] would be the 2nd child of the 2nd node.</p>
<p>A node at path [2,1,2] would be the 3rd child of the 2nd child of the 3rd node.</p>
<p>That may be hard to visualize, so here are the examples:</p>
<div className="codeblock">
  {
    example1.map((node, index)=>{
      return <pre>{JSON.stringify(node, null, 2)}</pre>
    })
  }
</div>

</div>;

export default col3;