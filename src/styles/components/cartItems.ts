import { styled } from '..'

export const CartItemsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '4.5rem 3rem 3rem',

  maxWidth: '480px',
  width: '100%',
  minHeight: '100vh',
  background: '$gray800',
  position: 'fixed',
  right: 0,
  top: 0,
  zIndex: 10,
  overflow: 'hidden',
  transform: 'translateX(100%)',

  variants: {
    isCartOpen: {
      true: {
        transform: 'translateX(0)',
      },
    },
  },

  h1: {
    marginBottom: '2rem',
    fontSize: '$lg',
    color: '$gray100',
  },
})

export const Quantity = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  span: {
    fontSize: '1rem',
    color: '$gray100',
  },

  p: {
    fontSize: '$md',
    color: '$gray100',
  },
})

export const TotalPrice = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '3px',

  p: {
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$gray100',
  },

  strong: {
    fontSize: '$xl',
    color: '$gray100',
  },
})

export const InfoQuanityPrice = styled('div', {
  marginTop: 'auto',
})

export const CloseButton = styled('button', {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  cursor: 'pointer',
  color: '#8D8D99',
})

export const FinalizeBuy = styled('button', {
  width: '100%',
  marginTop: '3.4375rem',
  background: '$green500',
  border: 0,
  color: 'white',
  borderRadius: 8,
  padding: '1.25rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '$md',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    background: '$green300',
  },
})

export const Overlay = styled('div', {
  position: 'fixed',
  background: 'rgba(0, 0, 0, 0.5)',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 5,
  transform: 'translateX(100%)',

  variants: {
    isCartOpen: {
      true: {
        transform: 'translateX(0)',
      },
    },
  },
})
