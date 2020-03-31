import React from 'react';

import EditorExample from './subpages/editor/Editor';

import './App.scss';
import InfoColumn from './subpages/InfoColumn/InfoColumn';

function App() {
  return (
    <div className="App">
      {/* <h1>Slate.js Knowledge Sharing</h1> */}
      <div className="App__body">
        <div className="col">
          <EditorExample />
        </div>
        {/* <div className="col">
          <InfoColumn/>
        </div> */}
        
        
      </div>
    </div>
  );
}

export default App;
