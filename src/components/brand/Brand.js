import React from 'react'
import "./Brand.css"
import { google,slack,atlassian,dropbox,shopify } from './imports'
 const Brand=()=> {
  return (
    <div className='gpt3__brand'>
      <img src={google}></img>
      <img src={slack}></img>
      <img src={atlassian}></img>
      <img src={dropbox}></img>
      <img src={shopify}></img>
    </div>
  )
}
export default Brand;
