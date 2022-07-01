import React from 'react'
import Roadmap from './Roadmap'

export default function Tokonomics() {
  return (
    <div>
        <section className='service bg-dark'>
            <div id="tokonomics">
                <h1 style={{fontSize:"32px", color:'#FFC107', paddingTop:"50px", textAlign:"center"}}>TOKONOMICS</h1>
                <div className='container' style={{marginTop:'100px', paddingBottom:'100px'}}>
                    <div className='row' >
                        <div className=' col-md-4' style={{ color:'#fff'}}>
                            <div className='icon-box'>
                            <h2>1% Auto burn</h2>
                                <p > 1% each sell will sent to burn address to decrease something </p>
                                </div>
                        </div>
                        <div className='col-md-4' style={{ color: '#fff'}}>
                            <div className='icon-box1'>
                            <h2>1% Auto burn</h2>
                            <p>1% each sell will sent to burn address to decrease something </p>
                            </div>
                        </div>
                        <div className='col-md-4' style={{ color: '#fff'}}>
                            <div className='icon-box2'>
                            <h2>1% Auto burn</h2>
                            <p>1% each sell will sent to burn address to decrease something</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Roadmap/>
        </section>
        
    </div>
  )
}
