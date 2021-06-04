/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default props => (
  <div className="pages__item">
    <button className="pages__item-button" onClick={props.onClick}>
      {props.page}
    </button>
  </div>
);
