import React, { Component, useContext } from 'react';
import styled from 'styled-components';
import BasicCharacteristic from './BasicCharacteristic.js';
const StyledBasicCharacteristicList = styled.div`
  border: 2px solid  #8D7AFF;
  grid-column-start:2;
  grid-column-end:3;
  grid-row-start :1;
  
`;
const StyledCenterContainer = styled.div`
  width: 400px;
  height: 400px;
  margin:70px auto auto auto;
`;
const TitleContainer = styled.div`
  font-size: 20px;
  font-weight: normal;
  margin: 10px 0 50px 15px;
  
  `;
const OptionContainer = styled.div`
  
`;

export default function BasicCharacteristicList()
{
	return(
		<StyledBasicCharacteristicList>
      <StyledCenterContainer>
        <TitleContainer>Tipo de Propiedad</TitleContainer>
        <OptionContainer>
          <BasicCharacteristic option="Departamento"/>
          <BasicCharacteristic option="Estudio"/>
          <BasicCharacteristic option="Loft"/>
          <BasicCharacteristic option="Casa"/>
          <BasicCharacteristic option="Duplex"/>
        </OptionContainer>
      </StyledCenterContainer>
		</StyledBasicCharacteristicList>
	);
} 