import React, {useState} from 'react';
import '../pages/pages.css';
import {FaTwitter} from "react-icons/fa"
import HomeCards from '../components/HomeCards';


const data=[
  {'title':'Burger', 'img':require('../assets/burger.jpg'), 'details':'try our delicious burger', 'price':'7.99', 'rating':'9.1'},
  {'title':'Pizza', 'img':require('../assets/pizza.jpg'), 'details':'try our amazing pizza', 'price':'10.99', 'rating':'9.5'},
  {'title':'Sliders', 'img':require('../assets/slider.jpg'), 'details':'our sliders are the best', 'price':'8.99', 'rating':'9.6'},
  {'title':'Spagetti', 'img':require('../assets/spagetti.jpg'), 'details':'try our original spagetti', 'price':'6.99', 'rating':'9.0'},
  {'title':'Staek', 'img':require('../assets/steak.jpg'), 'details':'try our slow cooked steak', 'price':'14.99', 'rating':'9.4'}
]

const Home=()=> {


  return (
    <div className="Container">

      <div className='header'>
        <p className='mainTitle'>Foodie</p>

        <div className='titleWrap'><p className='titles'>Contact Us</p></div>
        <div className='titleWrap'><p className='titles'>About</p></div>
        <div className='titleWrap'><p className='titles'>Home</p></div>
      </div>
      
      <img className="img" src={require('../assets/pizzaBackground.jpg')} style={{width:'100%'}}/>

      {data.map((d,i)=><HomeCards title={d.title} img={d.img} details={d.details} price={d.price} rating={d.rating} index={i}/>)}

    </div>
  );
}

export default Home;
