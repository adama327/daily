import React from 'react'
import { useParams } from 'react-router-dom'
import showStore from './showStore'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

export default function Show () {
  const [detail,setDetail] = useState()

  const store = showStore()
  const params = useParams()
  React.useEffect(() => {
      store.fetchData(params.id)
      fetch(`https://api.coingecko.com/api/v3/coins/${params.id}?localization=false&market_data=true`)
      .then(res => res.json())
      .then(res => setDetail(res))

      return () => {
        store.reset()
      }
  },[])
  
   if(!detail) return <></>
    return ( 
<div className='p-count'>
      <header className='p-head'>
      <img src={detail.image.large} alt="crypto" id='p-img' />
        <h2 className='p-name'>{detail.name} ({detail.symbol})</h2>
      </header>
      <div className='showGraph'>
        <ResponsiveContainer height="100%" width="100%">
        <AreaChart
          data={store.graphData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        </ResponsiveContainer>

      </div>


       <div className='p-count'>
       <div className='p-div'>
          <h4 className='p-t-ti'>Market Cap Rank</h4>
          <span className='p-t-det'>{detail.market_cap_rank}</span>
        </div>
        <div className='p-div'>
          <h4 className='p-t-ti'>24h high</h4>
          <span className='p-t-det'>$ {detail.market_data.high_24h.usd}</span>
        </div>
        <div className='p-div'>
          <h4 className='p-t-ti'>24h low</h4>
          <span className='p-t-det'>$ {detail.market_data.low_24h.usd}</span>
        </div>
        <div className='p-div'>
          <h4 className='p-t-ti'>Circulating supply</h4>
          <span className='p-t-det'>$ {detail.market_data.circulating_supply}</span>
        </div>
        <div className='p-div'>
          <h4 className='p-t-ti'>Current price</h4>
          <span className='p-t-det'>$ {detail.market_data.current_price.usd}</span>
        </div>
        <div className='p-div'>
          <h4 className='p-t-ti'>1y change</h4>
          <span className='p-t-det'>$ {detail.market_data.price_change_percentage_1y.toFixed(2)}%</span>
        </div>
       </div>

      </div>

  )
  }
