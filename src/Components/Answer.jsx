/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default props => (
  <div className="answers">
    <div className="answers__item">
      <button className="answers__button answers__button-right answers__button-wrong" onClick={props.answerHandler}>
        {props.answer}
      </button>
    </div>
  </div>
);
