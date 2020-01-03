import React, { Component, useContext } from 'react';
import styled from 'styled-components';
import Option from './Option.js';
const StyledOptionList = styled.div`
  grid-column-start:1;
  grid-column-end:2;
  grid-row-start :1;
  margin: 100px 0 0 30px;

`;

export default function OptionList()
{
	return(
		<StyledOptionList>
			<Option selected={false} ready={true} name="Identidad"/>
      <Option selected={false} ready={true} name="Propiedad"/>
      <Option selected={true} ready={true} name="Caracteristicas Básicas"/>
      <Option selected={false} ready={false} name="Espacios" />
      <Option selected={false} ready={false} name="Fotos y anuncio"/>
      <Option selected={false} ready={false} name="Precio"/>
      <Option selected={false} ready={false} name="Disponibilidad"/>
		</StyledOptionList>
	);
} 