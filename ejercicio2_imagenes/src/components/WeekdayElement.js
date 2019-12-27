
import React, { Component, useState, useContext } from 'react';
import styled from 'styled-components';

export default function WeekdayElement(props){

  const [color, changeColor] = useState("#CCCCCC");
  const [fontColor, changeFontColor] = useState("#000000");
  const selectElement = () => {changeColor(color=="#CCCCCC"? ("#1a73e8"):("#CCCCCC")); changeFontColor(fontColor=="#000000"?("#ffffff"):("#0000000"));}
  const DaySelector= styled.div`
  background-color: ${color};
  color: ${fontColor};
  cursor: pointer;
  width: 25px;
  height:20px;
  padding-top:5px;
  font-size:12px;
  text-align: center;
  border-radius:20px;
  display: inline-block;
  margin-right:10px;
  &:hover{
    background-color: #999999;
  }

`;
	return(
		<DaySelector  onClick={selectElement}>
      {props.day}
    </DaySelector> 
	)
}