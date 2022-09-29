import { AppProps } from 'next/app'
import { CartProvider } from 'use-shopping-cart'
import { Header } from '../components/Header'

import { globalStyles } from '../styles/global'

import { Container } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider
        cartMode="checkout-session"
        stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}
        currency="BRL"
      >
        <Header />
        <Component {...pageProps} />
      </CartProvider>
    </Container>
  )
}
