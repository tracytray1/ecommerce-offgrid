import { useContext } from 'react'

import ShoppingIcon from '../../assets/shopping-bag.svg?react';
import { CartContext } from '../../contexts/cart';

import './CartIcon.scss'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>10</span>
    </div>

  )
}

export default CartIcon;
