import React, { Component, useContext } from 'react';
import styled from 'styled-components';
const ButtonContainer = styled.div`
  display:inline-block;
`;

export default function DateInput(props) {
	const OptionButton = styled.button`
	border:none;
	border-radius: 0;
	color: ${props.color};
	background-color: white;
`;
  return (
    <ButtonContainer>
		<OptionButton>
			{props.text}
		</OptionButton>
	</ButtonContainer>
  );
}