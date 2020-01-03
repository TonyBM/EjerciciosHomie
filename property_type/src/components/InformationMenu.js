import React, { Component, useContext } from 'react';
import styled from 'styled-components';
import BasicCharacteristicList from './BasicCharacteristicList.js';
import OptionList from './OptionList.js';
const RegisterMenu = styled.div`
  width: 800px;
  height: 500px;
  display: grid;
  grid-template-columns: 300px 500px;
  margin: 70px auto auto auto;
`;

export default function InformationMenu()
{
	return(
		<RegisterMenu>
      <BasicCharacteristicList />
      <OptionList />
		</RegisterMenu>
	);
} 