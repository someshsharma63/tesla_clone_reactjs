import React from 'react'

function Banner_single({imagedata,head,btnone,btntwo}) {
  return (
    <div className='banner_content'>
        <div className='myimage'>
             <img src={imagedata} alt="" />
        </div>
        <div className='data'>
               <div className='parent'>
               <h1> {head}</h1>
      <p>Order Online for touchless delivery</p>
      <div className='btn'>
             <button className='btnone'>{btnone}</button>
      <button className='btnone btntwo'>{btntwo}</button>
      </div>
     
        </div>
        </div>
     
   
    </div>
  )
}

export default Banner_single