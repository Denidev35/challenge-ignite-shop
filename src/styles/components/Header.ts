import { styled } from '..'

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  position: 'relative',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const CartButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',

  padding: '0.75rem',
  background: '$gray800',
  borderRadius: 6,
  border: 0,
  position: 'relative',

  '&::after': {
    content: 'attr(data-badge)',
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: '50%',
    top: -7,
    right: -7,
    background: '$green500',
    color: '$white',
    fontSize: '0.875rem',
    fontWeight: 'bold',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '&[data-badge="0"]::after': {
    display: 'none',
  },
})
