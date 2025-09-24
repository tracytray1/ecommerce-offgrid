import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../contexts/cart'

import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems } from './CartDropdown.styles'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown
