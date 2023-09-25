import { BoxLoading } from 'react-loadingg';
import './Preloader.css'
import React from 'react';

// fallback style
export default class Preloader extends React.Component{
  render(){
    return  (
      <div className='App-header'>
        <BoxLoading color='orange' size='large'/>
      </div> 
    )
  }
  
    
}