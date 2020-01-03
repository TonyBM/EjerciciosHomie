import React, { Component, useContext } from 'react';
import styled from 'styled-components';
const StyledOption = styled.div`
  border: 1px solid #CCCCCC;
  height: 30px;
  width: 350px;
  font-size: 16px;
  margin: 5px auto;
  padding: 10px 0 0 20px;
`;
const StyledInput = styled.input`
  visibility: hidden;
  position:absolute;
  &:checked+ ${StyledOption}{
	background-color: #8D7AFF;
    color: white;
    font-weight:bold;
  }

`;

export default function BasicCharacteristic(props)
{
	return(
		<label>
			<StyledInput type="radio" name="caracteristicas"/>
			<StyledOption>{props.option}</StyledOption>
		</label>
	);
} 