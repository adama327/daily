import React from 'react'
import { Link } from 'react-router-dom'

export default function ListItem ({coin}) {
  return (
    <div className='sear-contai'>
    <Link to={`/${coin.id}`}>
        <span><img src={coin.image} alt="crypto" className='img-coin'/></span>
        <span id='coin-name'>{coin.name}</span>
     {coin.priceBtc && (<span className='price'>
       <div className='price-bt'>
         <span id='coin-btc'>{coin.priceBtc} BTC</span>
          <span id='coin-usd'>{coin.priceUsd} USD</span>
       </div>
   
     </span>) }       
 </Link>
</div>
  )
}
