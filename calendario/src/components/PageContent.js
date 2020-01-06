import React, { Component, useContext } from 'react';
import styled from 'styled-components';
import DateElement from './DateElement.js'
const StyledBody = styled.div`
	width: auto;
  max-height: 500px;
  overflow:scroll;
  padding-top: 130px;

`;
const DateElements=[];

let Hours = ["1 AM", "2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM","11 PM","12 PM"];
Hours.forEach((element)=>
{
  DateElements.push(<DateElement time={element} body={(element=="10 AM")?("Meeting, 10:30 AM"):("")} />);
});

export default function PageHeader() {
	return (
		<StyledBody>
    {DateElements}
		</StyledBody>
	)


}