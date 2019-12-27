import React, { Component, useContext } from 'react';
import styled from 'styled-components';
const DaySelect= styled.input`
  width:80px;
  border-radius:5px;
  height: 40px;
  border:none;
  border-radius: 7px 7px 0 0;
  background-color:#EEEEEE;
  -moz-appearance: textfield;
  &:focus{
    -moz-appearance: button;

  border-bottom: 3px solid #1a73e8;
  }
`;
const DayContainer = styled.div`
  display:inline-block;
`;

export default function NumberSelector(){
	return(
    <DayContainer>
		<DaySelect type="number"/>
    </DayContainer>
	)
}