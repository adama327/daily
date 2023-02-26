
import './style.css'
import React,{useEffect} from 'react'
import homeStore from './homeStore'
import ListItem from './listItem'


const HomeCrypto = () =>{
    const store = homeStore()

    useEffect(() =>{
       if (store.trending.length===0) store.fetchCoins()
    },[])
    return (
    <>
    <div className='sear-head'>
        <h3>Search for all Crypto Currencies </h3>
    </div>
    <div>
        <div className='spiner'>
        <input type='text' value={store.query} onChange={store.setQuery} className="sear-inp"/>
        </div>
        <div className='res-cont'>
        <h3 className='res-sear'>{store.searched ? 'Search Result' : 'Trending coins'}</h3>
        </div>
        {store.coins.map(coin=>{
            return <ListItem key={coin.id} coin={coin}/>
        })}
    </div>
    </>
        )
}
export default HomeCrypto