
import React, { Component, useContext } from 'react';
import ImageDisplay from './ImageDisplay';
import styled, {keyframes} from 'styled-components';
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Gallery = styled.div
	`img{
		animation: ${rotate} 3s linear infinite;
	}`;
export default function ImageContainer(){
	return(
		<Gallery>
			<ImageDisplay url="https://cdn2-www.dogtime.com/assets/uploads/2018/10/puppies-cover.jpg"/>
			<ImageDisplay url="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231413/Labrador-Retriever-MP.jpg"/>
			<ImageDisplay url="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/01/shutterstock_587562362.jpg"/>
		</Gallery>
	)


}