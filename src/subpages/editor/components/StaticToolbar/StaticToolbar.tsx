import React from 'react';
import BlockButton from '../BlockButton/BlockButton';
import MarkButton from '../MarkButton/MarkButton';
import {FormatBold, FormatItalic, FormatUnderlined, Code, Filter1, Filter2, FormatQuote, FormatListNumbered, FormatListBulleted} from '@material-ui/icons';

import './StaticToolbar.scss';

const StaticToolbar  = () => {
  return (
      <div className="toolbar__container">
        <MarkButton format="bold" icon={<FormatBold />} />
        <MarkButton format="italic" icon={<FormatItalic />} />
        <MarkButton format="underline" icon={<FormatUnderlined/>} />
        <MarkButton format="code" icon={<Code/>} />
        <BlockButton format="heading-one" icon={<Filter1/>} />
        <BlockButton format="heading-two" icon={<Filter2/>} />
        <BlockButton format="block-quote" icon={<FormatQuote/>} />
        <BlockButton format="numbered-list" icon={<FormatListNumbered/>} />
        <BlockButton format="bulleted-list" icon={<FormatListBulleted/>} />
      </div>
  );
}

export default StaticToolbar;