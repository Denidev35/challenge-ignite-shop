import { X } from 'phosphor-react'
import {
  CartItemsContainer,
  CloseButton,
  FinalizeBuy,
  InfoQuanityPrice,
  Overlay,
  Quantity,
  TotalPrice,
} from '../styles/components/cartItems'
import { Item } from './Item'
import { useShoppingCart } from 'use-shopping-cart'
import axios from 'axios'
import { useState } from 'react'

export function CartItems() {
  const {
    cartDetails,
    removeItem,
    handleCloseCart,
    formattedTotalPrice,
    shouldDisplayCart,
    cartCount,
    redirectToCheckout,
    clearCart,
  } = useShoppingCart()

  const items = Object.values(cartDetails ?? {})

  const [isCreateCheckoutSession, setIsCreateCheckoutSession] = useState(false)
  async function handleByCart() {
    try {
      const response = await axios.post('/api/checkout', {
        items,
      })

      const { checkoutSessionId } = response.data
      setIsCreateCheckoutSession(true)

      clearCart()

      const result = await redirectToCheckout(checkoutSessionId)

      if (result?.error) {
        console.error('Result error: ', result)
      }
    } catch (err) {
      setIsCreateCheckoutSession(false)
      // Conectar a uma ferramenta de observabilidade (Datadog / Sentry)
      alert('Falha ao redirecionar o checkout')
    }
  }

  return (
    <>
      <CartItemsContainer isCartOpen={shouldDisplayCart}>
        <CloseButton onClick={handleCloseCart}>
          <X size={24} />
        </CloseButton>
        <h1>Sacola de compras</h1>
        {cartCount === 0 ? (
          <h1 style={{ textAlign: 'center' }}>
            Sua sacola de compras está vazia, preencha-a e volte para realizar
            sua compra
          </h1>
        ) : (
          ''
        )}
        {items.map((item) => {
          return <Item key={item.id} item={item} removeItem={removeItem} />
        })}
        <InfoQuanityPrice>
          <Quantity>
            <span>Quantidade</span>
            <p>{cartCount} items</p>
          </Quantity>
          <TotalPrice>
            <p>Valor total</p>
            <strong>{formattedTotalPrice}</strong>
          </TotalPrice>

          <FinalizeBuy
            disabled={isCreateCheckoutSession}
            onClick={handleByCart}
          >
            Finalizar compra
          </FinalizeBuy>
        </InfoQuanityPrice>
      </CartItemsContainer>
      <Overlay isCartOpen={shouldDisplayCart} onClick={handleCloseCart} />
    </>
  )
}
