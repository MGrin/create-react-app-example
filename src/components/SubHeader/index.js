import React from 'react';
import { Subheader } from 'material-ui';
import './styles.css';

export default ({ title, renderRightMenu }) => (
  <Subheader className="subheader subheader-wrapper">
    <div className="subheader subheader-title">{title}</div>
    {renderRightMenu &&
      <div className="subheader subheader-rightmenu">
        {renderRightMenu()}
      </div>}
  </Subheader>
);
