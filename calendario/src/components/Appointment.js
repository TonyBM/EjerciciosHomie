import React, { Component, useContext } from 'react';
import styled from 'styled-components';
const StyledContent = styled.div`
	border-radius: 5px;
	width: 100%;
	height: 50%;
	margin-top:25px;
	background-color: #24a0ed;
`;

export default function Appointment(props) {
  return (
    <StyledContent>
			{props.body}
    </StyledContent>
  )


}