import React from 'react'

export default function Market(props) {
    return (
        <article className="arrttt">
            
            <img src={props.imgUrl} alt=""/>
            <h2> {props.price} ₽ <span>{props.priceDirection} </span></h2> 
            {/* <h3>{props.priceDirection} </h3> */}
            
            <a href="">{props.title } </a>
            
            

        </article> 
    )
}
