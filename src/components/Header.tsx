import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import { CartButton, HeaderContainer } from '../styles/components/Header'
import { useShoppingCart } from 'use-shopping-cart'

import logoImg from '../assets/logo.svg'
import { CartItems } from './CartItems'
import Link from 'next/link'

export function Header() {
  const { handleCartHover, cartCount } = useShoppingCart()
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>
      <CartButton onClick={handleCartHover} data-badge={cartCount}>
        <Handbag weight="bold" size={24} color="#8D8D99" />
      </CartButton>
      <CartItems />
    </HeaderContainer>
  )
}
