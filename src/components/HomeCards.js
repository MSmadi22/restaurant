import React, {useState} from 'react';
import '../components/components.css';
import {FaStar} from "react-icons/fa"
import {BiDollar} from "react-icons/bi"



const HomeCards=(props)=> {


  return (
    <div className="HomeCardsContainer" style={{flexDirection:props.index%2==0?'row':'row-reverse'}}>
        <div className="SecondContainer" style={{width:'50%'}}>

            <img className='HomeCardsImg' src={props.img} />

            <div className='details' style={{width:'100%'}}>
                <p className='title'>{props.title}</p>
                <p>{props.details}</p>
            </div>
                
            <div className='priceRatingContainer'>
                <p className='price'>{props.price}<BiDollar size={18} color='#27ae60' style={{paddingRight:3, paddingLeft:3}}/></p>
                <p className='rating'>{props.rating}<FaStar size={18} color='#FFC312' style={{paddingRight:3, paddingLeft:3}}/></p>
            </div>

        </div>
    </div>
  );
}

export default HomeCards;
