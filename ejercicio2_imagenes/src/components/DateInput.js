import React, { Component, useContext } from 'react';
import styled from 'styled-components';
const EndDateSection = styled.div`
  display:grid;
  grid-template-rows: 50px 50px;
  & input{
    border: none;
    background-color: #e8e8e8;
    color: grey;
    height: 40px;
  
  }
`;
const FirstElement = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
`;
const SecondElement = styled.div`  
  grid-row-start: 2;
  grid-row-end: 3;
`;
const EndIndicationShort = styled.input`
  width:150px;
`;
const EndIndicationLong = styled.input`
  width:200px;
`;
export default function DateInput() {
  return (
    <EndDateSection>
      <FirstElement>
      <EndIndicationShort disabled placeholder="27 de MAR del 2020" />
      </FirstElement>
      <SecondElement>
      <EndIndicationLong  disabled placeholder="13                    Repeticiones" />
      </SecondElement>
    </EndDateSection>
  );
}