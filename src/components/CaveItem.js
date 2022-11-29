import "./CaveItem.css";
import React, {useEffect, useState} from 'react';

export default function CaveItem(props) {
    const [aggregatorState, setAggregatorState] = useState("Favorite");
    const [inCart, setInCart] = useState(false);

    useEffect(() => {
        console.log(props.cartItems);
        props.cartItems.map((cartItem) => {

              if (cartItem === props.itemName) {
                  setAggregatorState("Remove from Favorites");
                  setInCart(true);
              }
        })
    });


    const filterCart = (val) => {
        if (val === props.itemName) {
            return false
        } else {
            return true
        }
    };

    const addToCart = (event) => {
        if (!inCart) {
            console.log(props.itemName);
            props.setCartTotal(props.cartTotal + props.price)
            setInCart(true)
            props.setCartItems([...props.cartItems, props.itemName])
            setAggregatorState("Remove from Favorites");
        } else {
            console.log("unfavoriting");
            props.setCartTotal(props.cartTotal - props.price)
            setInCart(false)
            props.setCartItems(props.cartItems.filter(filterCart))
            setAggregatorState("Favorite");
        }
    }

    return (
        <div className="cave-item">
            <img className='item-img' src={props.itemImg} />
            <div className='item-desc'>
                <h3>{props.itemName}</h3>
                <p>{props.itemDesc}</p>
                <p>{props.itemDecade}, {props.itemGenre}</p>
                <div className="price-cart">
                    <p>${props.price}</p>
                    <button onClick={addToCart}>{aggregatorState}</button>
                </div>
            </div>
        </div>
    );
}