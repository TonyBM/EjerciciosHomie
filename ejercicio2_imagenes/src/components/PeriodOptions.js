
import React from 'react';
import styled from 'styled-components';
const PeriodSelect= styled.div`
  height: 37px;
  padding: 10px 15px 0 15px;
  border:none;
  border-radius: 5px;
  background-color: #EEEEEE;  
  display: inline-block;
  &:hover div{
    display: block;
  }
`;
const PeriodOption= styled.div`
 display: none;
 position: absolute;
  background-color: #f9f9f9;
  margin-top:-75px;
  width:120px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 10;
  & div {
    min-width:100%;
  }
  & div:hover{
    background-color:#EEEEEE;
    }
`;
export default function PeriodOptions(){
	return(
		<PeriodSelect>
      Semana
			<PeriodOption>
      <div><p>Día</p></div>
      <div><p>Semana</p></div>
      <div><p>Mes</p></div>
      <div><p>Año</p></div>
      	</PeriodOption>
		</PeriodSelect>
	)
}