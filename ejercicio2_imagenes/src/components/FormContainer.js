
import React, { Component, useContext } from 'react';
import styled from 'styled-components';
import NumberSelector from './NumberSelector.js';
import PeriodOptions from './PeriodOptions.js';
import WeekdayElement from './WeekdayElement.js';
import EndDateSelector from './EndDateSelector.js';
import DateInput from './DateInput.js';
import StyledButton from './StyledButton.js';
const AlarmForm = styled.form`
  width: 400px;
  margin:auto;
  height: auto;
  padding:10px;
  
`;
const Title = styled.div`
  width: 100%;
  height: 50px;
  font-size: 20px;
`;
const PeriodSelector = styled.div`
 
    display:grid;
    grid-template-columns: 100px 100px 100px;
    grid-gap:0 ;
`
const FormElementTitle = styled.div`
  display: inline-block;
`
const HeaderElement = styled.div`
  display: inline-block;
  height: 50px;
`
const WeekDaySelector = styled.div`
  margin-top:30px;
`
const FinishDate= styled.div`
  display: grid;
  grid-gap :20px;
  grid-template-columns: 190px 190px;
  grid-template-rows: 50px 50px 50px;

`
const Weekdays = styled.div`
  margin: 30px 0 30px 0 ;
`
const DateInputs = styled.div`
  display:grid;
  grid-template-rows: 50px 50px;
  grid-column-start:2;
  grid-column-end:3;
  grid-row-start:2;
  grid-row-end:4;
  width:10px;
  margin-left:-80px;
`;
const ButtonSection = styled.div`
  text-align:right;
  
`;
export default function FormContainer() {
  return (
    <AlarmForm>
      <Title>
        Periodicidad Personalizada
      </Title>
      <PeriodSelector>
        <FormElementTitle>
          Repetir Cada
        </FormElementTitle>
          <NumberSelector />
          <PeriodOptions />
      </PeriodSelector>
      <WeekDaySelector>
        <FormElementTitle>
          Se repite el
        </FormElementTitle>
        <Weekdays>
          <WeekdayElement day="D"/>
          <WeekdayElement day="L"/>
          <WeekdayElement day="M"/>
          <WeekdayElement day="X"/>
          <WeekdayElement day="J"/>
          <WeekdayElement day="V"/>
          <WeekdayElement day="S"/>
        </Weekdays>
      </WeekDaySelector>

      <FormElementTitle>
          Termina
        </FormElementTitle>
      <FinishDate>
        <EndDateSelector />
        <DateInputs>
          <DateInput />
        </DateInputs>
      </FinishDate>
      <ButtonSection>
        <StyledButton color="#CCCCCC" text="Cancelar" />
        <StyledButton color="#1a73e8" text="Listo"/>
      </ButtonSection>
      
    </AlarmForm>
  )
}