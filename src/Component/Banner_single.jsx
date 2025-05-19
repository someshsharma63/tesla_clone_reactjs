import React from 'react'

function Banner_single({imagedata,para,head,btnone,btntwo,downarrow}) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${imagedata})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
        <div className='content'>
               <h1>{head}</h1>
               <p>{para}</p>
      <div className="button-group" style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button>{btnone}</button>
        {btntwo && <button>{btntwo}</button>}
        <div className='downarrow'>
        <img src={downarrow} alt="" />

        </div>
      </div>
        </div>
   
    </div>
  )
}

export default Banner_single