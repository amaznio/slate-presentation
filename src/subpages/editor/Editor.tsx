import React, { useCallback, useMemo, useState } from 'react'
import { Editable, withReact, Slate } from 'slate-react'
import { createEditor } from 'slate'
import { withHistory } from 'slate-history'

import StaticToolbar from './components/StaticToolbar/StaticToolbar';
import Element from './components/Element/Element';
import Leaf from './components/Leaf/Leaf';

import { initialValue } from './initialValue';
import { onKeyDownHandler } from './helpers/formatting.helper';

import './Editor.scss';
import Display from './components/Display/Display';

const EditorExample = () => {
  const [value, setValue] = useState(initialValue)
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  return (
    <Slate editor={editor} value={value} onChange={(value: any) => setValue(value)}>
      <StaticToolbar />
      <Editable
        className="editor__container"
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
        onKeyDown={(event: any) => onKeyDownHandler(event, editor)}
      />
      <Display />
    </Slate>
  )
}

export default EditorExample;