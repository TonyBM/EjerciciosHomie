import React, { Component, useContext } from 'react';
import styled from 'styled-components';
import EndOption from './EndOption.js';
const EndDateSection = styled.div`
  margin-top:40px;
  width:150px;
`;

export default function EndDateSelector()
{
	return(
		<EndDateSection>
			<EndOption text="Nunca"/>
			<EndOption text="El"/>
			<EndOption text="Después de"/>
		</EndDateSection>
	);
}