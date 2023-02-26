import { Route,Routes,Link } from "react-router-dom"
import React from "react"
import HomeCrypto from "../components/crypto/home"
import Show from "../components/crypto/show"
import WidgetsExc from "../components/exchange/widgets"
import './homep.css'
import Currencies from "../components/exchange/exchange"

const HomePage = () =>{
    const Home = () =>{
        return (
            <>
            <div className="buy-c-h">
                <div>
                    <div>
                    <h2 id="h2h">Buy Crypto wherever you are !!!</h2>
                   <br/>
                   <h3 className="h45h">By card, transfer, cash or Bit2Me balance</h3>
                   <br/>
                   <h5 className="h45h">Buy at the best price and in real time. Buying Cryptocurrencies has never been so easy, fast and secure.</h5>
                    </div>
                    <div>
                        <img src="/crypto.jpg" alt="crypto" width={"330px"}  />
                    </div>
                </div>

                <div>
                   <iframe title= "kkk" src="https://bit2me.com/widget/buy/v2?currency=BTC&amount=100&method=card" style={{display:"block",width:"100%",maxWidth:"360px",height:"530px",margin:"auto"}} frameborder="0"></iframe>
                </div>
            </div>

                 <div className="exc-dev">
                    <div className="exc-img">
                        <div>
                            <h2 id="mad">Dirham Morrocan (MAD) trending exchange</h2>
                        </div>
                        <div>
                        <img src="/exc.jpg" alt="exc"  width={"400px"}/>

                        </div>
                    </div>
                    <div>
                        <WidgetsExc/>
                    </div>
                 </div>


                 <div className="events">
                    <div className="usastock">
                    <iframe title="eki" style={{width:"500px", border:"0", overflow:"hidden", backgroundColor:"transparent", height:"481px"}} scrolling="no" src="https://fortrader.org/en/informers/getInformer?st=11&cat=14&title=American%20Stock%20Market&texts=%7B%22toolTitle%22%3A%22Symbol%22%2C%22bid%22%3A%22Bid%22%7D&mult=1&showGetBtn=0&w=0&colors=false&items=126%2C130%2C25463%2C25462%2C25464%2C40%2C32%2C27%2C25524&columns=bid"></iframe>
                    </div>
                    <div className="forex">
                    <iframe title= "rr" style={{width:"600px", border:"0", overflow:"hidden", backgroundColor:"transparent", height:"758px"}} scrolling="no" src="https://fortrader.org/en/informers/getInformer?st=1&cat=10&title=Metals&texts=%7B%22toolTitle%22%3A%22Symbol%22%2C%22bid%22%3A%22Bid%22%2C%22openQuote%22%3A%22Open%22%2C%22highQuote%22%3A%22High%22%2C%22lowQuote%22%3A%22Low%22%2C%22time%22%3A%22Time%22%7D&mult=1&showGetBtn=0&w=0&colors=false&items=48%2C49%2C25459%2C25458%2C25466&columns=bid%2CopenQuote%2ChighQuote%2ClowQuote%2Ctime"></iframe>
                    </div>
                 </div>

                 <div className="con-event">
                    <div>
                        <h3 id="c-events">Comming events</h3>
                    </div>
                    <div className="events">
                    <img src="/meeting (1).png" alt="events" width={"410px"} />
                    <iframe title= "gg" style={{width:"700px", border:"0", overflow:"hidden", backgroundColor:"white",height:"614px"}} scrolling="yes" src="https://fortrader.org/en/informers/getInformer?st=55&cat=24&update=1&impact=all&symbols=all"></iframe>
                    </div>
                 </div>
                 
            </>
        )
    }
    return (
        <>
        <div>
     <div>
      <div className="navbar">
         <Link to='/' className="link">Home</Link>
        <Link to='crypto-currencies' className="link">Crypto Currencies</Link>
        <Link to='currencies' className="link">Exchange Currencies</Link>
      </div>
      </div>
      <nav>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route  path="/crypto-currencies" element={<HomeCrypto/>}/> 
             <Route path='/:id' element={<Show/>}/>
        <Route  path="/currencies" element={<Currencies/>}/>
    </Routes>
     </nav>
        </div>

        </>
    )
}
export default HomePage