import React from 'react'

export default function Purchase(props) {
    return (
        <article>
            
            <img src={props.imgUrl} alt=""/>
            <h2> {props.price} ₽ <span>{props.firstPrice} </span></h2> 
            {/* <h3>{props.priceDirection} </h3> */}
            
            <a href="#">{props.namePurchase } </a>
            
            

        </article> 
    )
}
