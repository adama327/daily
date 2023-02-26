import './exchange.css'

export default function Currencies  (){
    return (
        <>
        <div className='exc-head'>
            <h2 className="exc-ti">Exchange Currencies</h2>
        </div>
        <div className='img-exc'>
            <img src="/exchanging.png" alt="" srcset="" />
        </div>
        <div>

            <div>
                <div>
                   <h3 className='h3exc Mad'> Check in real-time currencies pair</h3>
                </div>
                <div className='iframe'>
                <iframe height={"355"} width={"97%"} src="https://sslcharts.investing.com/index.php?force_lang=1&pair_ID=11755&timescale=86400&candles=50&style=line"></iframe><br />
                <div style={{width:"500px"}}><a target="_blank" href="https://www.investing.com"><img src="https://wmt-invdn-com.investing.com/forexpros_en_logo.png" alt="Investing.com" 
                title="Investing.com" style={{float:"left", border:"0"}}/></a><span style={{float:"right"}}><span style={{fontSize: "11px", color: "#333333", textDecoration: "none"}}>
                <a href="https://www.investing.com/" rel="nofollow" target="_blank" style={{fontSize: "11px", color: "#06529D" , fontWeight: "bold"}} className="underline_link"></a></span></span></div>
                </div>
               
            </div>
        </div>

        <div className='cont-convertor'> 
                <div>
                    <h2 id='conv'>Real-Time all currencies convertor</h2>
                </div>
                <div>
                    <fxwidget-cc amount="100" decimals="2" large="false" shadow="true" symbol="true" grouping="true" border="true" from="MAD" to="USD" background-color="#fafafa" border-radius="0.45"></fxwidget-cc>
                </div>
            </div>
        </>
    )
}

 