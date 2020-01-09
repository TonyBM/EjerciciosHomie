import React, { useState } from 'react';
import Styled from 'styled-components';
import { checkPropTypes } from 'prop-types';






function PageButton(props) {

    const Button = Styled.button`
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    color: ${props.selected ? ("white"):("blue")};;
    border: 2px solid blue;
    margin: 15px;
    padding: 0.25em 1em;
    background-color: ${props.selected ? ("blue"):("transparent")};
    transition: 0.5s all ease-out;
    &:hover {
      background-color: blue;
      color: white;
    }
  `;
console.log(props);
  return (
    <Button onClick={props.clickAction(props.page)}>
      {props.page}
    </Button>
  );
}

export default PageButton;