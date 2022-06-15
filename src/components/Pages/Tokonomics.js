import React from 'react'

export default function Tokonomics() {
  return (
    <div>
        <section className='service bg-dark'>
            <div id="tokonomics">
                <h1 style={{ color: '#fff',paddingTop:"50px"}}>TOKONOMICS</h1>
                <div className='container' style={{marginTop:'100px', paddingBottom:'100px'}}>
                    <div className='row'>
                        <div className=' col-md-4' style={{ color: '#fff'}}>
                            <div className='icon-box'>
                            <h2>1% Auto burn</h2>
                                <p > 1% each sell will sent to burn address to decrease supply &amp; increase price.</p>
                                </div>
                        </div>
                        <div className='col-md-4' style={{ color: '#fff'}}>
                            <div className='icon-box1'>
                            <h2>1% Liquidity Pool</h2>
                            <p>1% of each transaction (BUY/SELL) is transformed into liquidity pool (to increase price floor).</p>
                            </div>
                        </div>
                        <div className='col-md-4' style={{ color: '#fff'}}>
                            <div className='icon-box2'>
                            <h2>2% Marketing</h2>
                            <p>2% of each transaction (BUY/SELL) is transformed into marketing wallet so we've massive marketing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
