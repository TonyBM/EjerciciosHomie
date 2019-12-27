import React, { Component, useContext } from 'react';
import styled from 'styled-components';
const SelectorLine = styled.div`
  text-align: left ;
  height:50px;
`
const DaySelector = styled.input`
  background-color: #9aa0a6;
  padding-top:5px;
  font-size:12px;
  text-align: center;
  display:inline-block;
  border-radius:20px;
  margin-right:10px;
  position: absolute;
  opacity: 0;
  cursor: pointer;
  &:checked ~ span {
  background-color: white;
  border:2px solid #1a73e8;
  }
  &:checked ~ span:after{
    display: block;
  }

`;
const CustomButton = styled.span`
  position: absolute;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
  &:hover{
    background-color: #ccc;
  }
  &:after{
    top: 6px;
	left: 6px;
	width: 13px;
	height: 13px;
	border-radius: 50%;
	background: #1a73e8;
  content: "";
  position: absolute;
  display: none;
  }

`
const OptionText = styled.div`
  margin-left:35px;
`
export default function WeekdayElement(props) {
  return (
    <SelectorLine>
      <label>
        <DaySelector type="radio" name="finishOption" />
        <CustomButton></CustomButton>
        <OptionText>
          {props.text}
        </OptionText>
      </label>
    </SelectorLine>
  )
}