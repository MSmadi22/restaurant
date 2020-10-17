
import React, {useState,useEffect} from 'react';
import {Route,Switch,withRouter} from 'react-router-dom'

const name='SMADI'

const arr=[
  {'title':"card A", 'bottom':'A', 'link':"https://google.com"},
  {'title':"card B", 'bottom':'B', 'link':"https://yahoo.com"},
  {'title':"card C", 'bottom':'C', 'link':"https://facebook.com"},
  {'title':"card D", 'bottom':'D', 'link':"https://npm.com"},
]




const Login=(props)=> {
    
  return (
    <div className='login'>
    <p style={{color:'#FFC312', fontSize:32, marginTop:5}}>Login</p>
    
    <div className='input-container'>
      <input placeholder='Enter your name' className='input' required=""/>
      <input placeholder='Enter your password' className='input' required=""/>
    </div>
    
    <a className='signBtn' onClick={()=> props.history.push('/home') }>
    <p style={{fontSize:24, margin:0, color:'white'}}>Sign in</p>
    </a>
    </div>
    
  );
}

export default withRouter(Login);
