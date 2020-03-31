import React from 'react';
import { toggleBlock, isBlockActive } from '../../helpers/formatting.helper';
import { useSlate } from 'slate-react';
import { IconButton } from '@material-ui/core';
import './BlockButton.scss';

const BlockButton = ({ format, icon}: any) => {
  const editor = useSlate();
  const active = isBlockActive(editor, format);
  const buttonStyles = ['formatButton'];
  if(active) buttonStyles.push('formatButton--active');

  const style = buttonStyles.join(" ");

  return (
    <IconButton
      size="small"
      onMouseDown={(event: any) => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
      className={style}
    >
      {icon}
    </IconButton>
  )
}

export default BlockButton;