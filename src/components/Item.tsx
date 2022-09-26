import Image from 'next/image'
import {
  ImageContainer,
  InfoContainer,
  ItemsContainer,
} from '../styles/components/Item'
import { CartEntry, CartActions } from 'use-shopping-cart/core'

interface ItemProps {
  item: CartEntry
  removeItem: CartActions['removeItem']
}

export function Item({ item, removeItem }: ItemProps) {
  return (
    <ItemsContainer>
      <ImageContainer>
        <Image src={item.imageUrl} width={120} height={110} alt="" />
      </ImageContainer>
      <InfoContainer>
        <p>{item.name}</p>
        <strong>{item.formattedValue}</strong>
        <button onClick={() => removeItem(item.id)}>Remover</button>
      </InfoContainer>
    </ItemsContainer>
  )
}
