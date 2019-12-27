//import React, {Component} from 'react';
import styled from 'styled-components';
//import {excludeProp} from "../../utils";
// import {withRouter} from "react-router-dom";


const Button = styled.button`
    background-color: ${props => props.theme === 'light' ? '#fff' : '#000'};
    color: ${props => props.color ? props.color : '#5ab962'};
    height: ${props => props.height ? props.height : 50}px;
    width: ${props => props.width ? props.width : 100}%;
    max-width: 250px;
    text-transform: uppercase;
    font-family: inherit;
    font-weight: bold;
    letter-spacing: 0.14em;
    
    font-size: 1.14em;
     -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    
    background-color: #fff;
    -moz-box-shadow: 0 2px 2px rgba(0,0,0,.05), inset 0 -2px 0 rgba(0,0,0,.08);
    -webkit-box-shadow: 0 2px 2px rgba(0,0,0,.05), inset 0 -2px 0 rgba(0,0,0,.08);
    box-shadow: 0 2px 2px rgba(0,0,0,.05), inset 0 -2px 0 rgba(0,0,0,.08);
    border: 1px solid #c4c4c4;
    color: #777;
`;

const Input = styled.input`
    background-color: rgba(255,255,255,0.74);
    letter-spacing: 0.04em;
    height: ${props => props.height ? props.height : 100}%;
    //width: 100%;
  width: 225px;
  
    margin: 20px 0;
    padding: 10px;
    &:focus{
      outline: none;
    }
    &::placeholder{
      color: #333;
      opacity: 0.7;
    }
`;

const CustomLink = styled.a`
    color: #ff0808;
    font-size: 11px;
    font-weight: bold;

`;

export {Button, Input, CustomLink}