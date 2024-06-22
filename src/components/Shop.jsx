import React from 'react'
import list from '../list'
import Card from '../Card'
import '../styles/card.css'

const shop = ({handleClick}) => {
  return (
    <section>
      {
        list.map(items => {
            return <Card item={items} key={items.id} handleClick={handleClick} />
        })
      }
    </section>
  )
}

export default shop
