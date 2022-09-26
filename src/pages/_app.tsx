import { AppProps } from 'next/app'
import { CartProvider } from 'use-shopping-cart'
import { Header } from '../components/Header'

import { globalStyles } from '../styles/global'

import { Container } from '../styles/pages/app'

globalStyles()

const stripeKey =
  'pk_test_51LktquL4ortaKR9zOvWnuupjitdjg5mKPGWVlaFtk6jRt0nFJ9C5NGzCJ6eBgAywPes0pLY4CTToqzbJSNnaVXvK00zY18JGie'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider
        cartMode="checkout-session"
        stripe={stripeKey}
        currency="BRL"
      >
        <Header />
        <Component {...pageProps} />
      </CartProvider>
    </Container>
  )
}
