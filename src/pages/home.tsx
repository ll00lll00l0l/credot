import React from 'react'
import Banner from '../components/banner'
import Brand from '../components/topbrands'
import Product from '../components/product'

export default function home() {
  return (
    <div>
      <Banner/>
      <div className='bodymargin'>
      <Product/>

        <Brand/>
        </div>
      
    </div>
  )
}
