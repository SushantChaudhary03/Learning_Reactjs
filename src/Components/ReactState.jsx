import React, { useState, useReducer } from 'react'

const products = [
    {
        emoji: '🍕',
        name: 'pizza',
        price: 8
    },
    {
        emoji: '🍔',
        name: 'burger',
        price: 6.5
    },
    {
        emoji: '🥤',
        name: 'soda',
        price: 1.5
    },
    {
        emoji: '🍟',
        name: 'fries',
        price: 3
    },
    {
        emoji: '🍪',
        name: 'cookie',
        price: 2
    }
];

const style = {
    marginTop: '20px'
}
const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,

}

function cartReducer(state, action) {
switch(action.type) {
 case 'add':
 return [...state, action.product];
 case 'remove':
 const productIndex = state.findIndex(item => item.name === action.product.name)
 if(productIndex < 0) {
 return state;
 }
 const update = [...state];
 update.splice(productIndex, 1)
 return update
 default:
 return state;
 }
}


function totalReducer(state, action) {
    if (action.type == 'add') {
        return state + action.price
    }
    return state - action.price
}

const ReactState = () => {
    // const [cart, setCart] = useState([])
    // const [total, setTotal] = useState(0)
    const [cart, setCart] = useReducer(cartReducer, []);
    const [total, setTotal] = useReducer(totalReducer, 0)

    const getTotal = (cart) => {
  const total = cart.reduce((totalCost, item) => {
    if (!item || typeof item.price !== 'number') {
      return totalCost;
    }
    return totalCost + item.price;
  }, 0);
  return total.toLocaleString(undefined, currencyOptions);
}


    // const add = (product) => {
    //     setCart(current=> [...current, product.name]);
    //     console.log(cart)
    //     setTotal(current=> current+product.price)
    // }

    // const remove = (product) => {
    //     const lastIndex = cart.lastIndexOf(product.name);
    //     console.log(lastIndex)
    //     if (lastIndex !== -1) {
    //         const newCart = [...cart];
    //         newCart.splice(lastIndex, 1);
    //         setCart(newCart)
    //         setTotal(current => current - product.price)
    //     }
    // }

    function add(product) {
        setCart({ product, type: 'add' });
    }

    function remove(product) {
        setCart({product, type: 'remove'})
    }


    return (
        <div className='product-box' style={style}>
            <div className="shopping-cart">
                Shopping cart: {cart.length} Total itmes.
            </div>
            <div className="total">
                Total: {getTotal(cart)}
            </div>
            <div className="product">
                {products.map(product => (<div key={product.name}>
                    <div className="new-product">
                        <span id='product'>{product.emoji}</span>
                        <span id='name'>{product.name}</span>
                        <span id='price'>{product.price}</span>
                        <button onClick={() => add(product)}>Add</button>
                        <button onClick={() => remove(product)}>Remove</button>
                    </div>
                </div>))}
            </div>
        </div>
    )
}

export default ReactState