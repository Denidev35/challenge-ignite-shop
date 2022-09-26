import { styled } from '..'

export const ItemsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1.5rem',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 101.94,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '1.25rem',

  p: {
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  strong: {
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray100',
  },

  button: {
    display: 'flex',
    alignItems: 'flex-start',

    fontSize: '1rem',
    fontWeight: 'bold',
    color: '$green500',
    marginTop: '0.5rem',
    border: 0,
    background: 'transparent',
  },
})
