import React, { useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import Col1Data from '../../data/col1';
import Col2Data from '../../data/col2';
import Col3Data from '../../data/col3';

import './InfoColumn.scss';
import { IconButton } from '@material-ui/core';

const InfoColumn = (props: any): JSX.Element => {
  const views = [Col1Data, <Col2Data/>, Col3Data];
  const [currentColumn, setCurrentColumn] = useState<number>(0);

  const goBack = () => {
    setCurrentColumn(currentColumn - 1);
  }

  const goForward = () => {
    setCurrentColumn(currentColumn + 1);
  }

  return (
    <div className="infoColumn">
      <IconButton className="button" size="medium" onClick={goBack} disabled={currentColumn === 0}><ArrowBackIcon/></IconButton>
      <IconButton className="button" size="medium" onClick={goForward} disabled={currentColumn === views.length - 1}><ArrowForwardIcon/></IconButton>
      {views[currentColumn]}
    </div>
  );
}

export default InfoColumn;