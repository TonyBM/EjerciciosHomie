import React, { Component, useContext } from 'react';
import styled from 'styled-components';
const StyledTitle = styled.div`
  width: 1000px;
  height: 130px;
  display: grid;
  grid-template-columns: 60px 940px;
  position: fixed;
  border-bottom: 2px solid #CCCCCC;
  background-color:white;   
`;
const StyledSide = styled.div`
  height:inherit;
  text-align: end;

`;
const SideContent=styled.div`
  position:absolute;
  bottom:0;
`;
const DateContainer = styled.div`
  grid-row-start:1;
  grid-row-end:2;
  padding-left:10px;
  width: 70px;
  text-align:center;
`;
const WeekDayText = styled.p`
  color: #777777;
  font-size:14px;
`;
const DateText = styled.p`
  font-size: 36px;
  line-height: 0.1;
`;
const ExtraSpace = styled.div`
  grid-row-start:2;
  grid-row-end:3;
  border-left: 2px solid #CCCCCC;
`;
const StyledBody = styled.div`
  height:inherit;
  display:grid;
  grid-template-rows: 100px 30px;
`;

export default function PageHeader() {
  return (
    <StyledTitle>
      <StyledSide>
        <SideContent>
          GTM-06
        </SideContent>
      </StyledSide>
      <StyledBody>
        <DateContainer>
          <WeekDayText>MIE</WeekDayText>
          <DateText>8</DateText>
        </DateContainer>
        <ExtraSpace>

        </ExtraSpace>
      </StyledBody>
    </StyledTitle>
  )


}