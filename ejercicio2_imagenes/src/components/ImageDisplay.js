import React, { Component, useContext, createContext} from 'react';
export default function ImageDisplay(props){
  return(
    <div class="image-container">
      <img  src={props.url}/>
    </ div>
  )

}