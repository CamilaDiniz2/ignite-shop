import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  alignItems: 'flex-start',
  width: '100%',
  maxWidth: 'calc(100vw - (100vw - 1180px)/2)',
  marginLeft: 'auto',
  minHeight: 656,
})

export const Product = styled('a', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',

  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  overflow: 'hidden',

  img:{
    objectFit: 'cover',
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
})

export const ProductInfo = styled('footer', {
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',

  borderRadius: 4,

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  padding: '1.5rem',

  transform: 'translateY(50%)',
  opacity: 0,
  transition: 'all 0.2s ease-in-out',

  div: {
    display: 'flex',
    flexDirection: 'column',

    strong:{
      fontSize: '$lg',
      lineHeight: '32px',
    },

    span:{
      fontSize: '$xl',
      lineHeight: '140%',
      color: '$green300',
      fontWeight: 'bold',
    }
  }
})

export const AddProduct = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$green500',
  border: 0,
  outlineWidth: 0,
  padding: '12px',
  borderRadius: 6,
  cursor: 'pointer',

  svg:{
    width: '32px',
    height: '32px',
    color: '$white',
    
  },

  '&:hover': {
    backgroundColor: '$green300'
  }
})