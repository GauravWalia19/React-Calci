import React from 'react';
import './styles/Button.css';

const Button = (props) => {
  return (
    <button
      className={
        props.darkMode
          ? 'operationButton darkButton'
          : 'operationButton lightButton'
      }
      onClick={props.handleClickOperation.bind(this, props.value)}
      type={props.value === '=' ? 'submit' : 'button'}
    >
      {props.value}
    </button>
  );
};

export default Button;
