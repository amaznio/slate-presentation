import React from 'react';
import { useSlate } from 'slate-react';
import { isMarkActive, toggleMark } from '../../helpers/formatting.helper';
import { IconButton } from '@material-ui/core';
import './MarkButton.scss';

const MarkButton = ({ format, icon }: any) => {
  const editor = useSlate();
  const active = isMarkActive(editor, format);
  const buttonStyles = ['formatButton'];
  if(active) buttonStyles.push('formatButton--active');

  const style = buttonStyles.join(" ");
  return (
    <IconButton
      size="small"
      onMouseDown={(event: any) => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
      className={style}
    >
      {icon}
    </IconButton>
  )
}

export default MarkButton;