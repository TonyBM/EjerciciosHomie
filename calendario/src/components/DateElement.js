import React, { Component, useContext } from 'react';
import styled from 'styled-components';
import Appointment from './Appointment';
const ElementContainer = styled.div`
	width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 60px 940px;
`;
const StyledSide = styled.div`
  display:grid; 
  grid-template-columns: 55px 5px;
  height:inherit ;
`;
const StyledBody = styled.div`
  height:inherit;
  border-left: 2px solid #CCCCCC;
  border-bottom: 2px solid #CCCCCC; 
`;
const SideContent = styled.div`

margin-top:42px;
`;
const MainSide = styled.div`
  grid-column-start:1;
  grid-column-end: 2;
  text-align:end;
  padding-right: 5px;
`;
const ExtraSpace = styled.div`
  grid-column-start:2;
  grid-column-end: 3;
  height:50px;
  border-bottom: 2px solid #CCCCCC;
`;
export default function DateElement(props) {
  return (
    <ElementContainer>
      <StyledSide>
        <MainSide>
          <SideContent>
            {props.time}
          </SideContent>
        </MainSide>
        <ExtraSpace></ExtraSpace>
      </StyledSide>
      <StyledBody>
        {props.body!="" ? (<Appointment body={props.body}/>):("")}
      </StyledBody>
    </ElementContainer>
  )


}