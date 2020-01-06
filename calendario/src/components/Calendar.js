import React, { Component, useContext } from 'react';
import styled from 'styled-components';
import PageHeader from "./PageHeader";
import PageContent from "./PageContent";

const CalendarContainer = styled.div`
  width:1200px;
  margin:auto;
`;

export default function Calendar() {
  return (
    <CalendarContainer>
      <PageHeader />
      <PageContent />
    </CalendarContainer>
  )


}