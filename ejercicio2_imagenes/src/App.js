import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormContainer from './components/FormContainer';
import styled from 'styled-components';
const GalleryContainer = styled.section
  `
  
  `
;

function App() {
  return (
    <GalleryContainer>
      <FormContainer />
    </GalleryContainer>
  );
}

export default App;
