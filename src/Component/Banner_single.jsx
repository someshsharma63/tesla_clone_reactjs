import React from 'react'

function Banner_single({ imagedata, para, head, btnone, btntwo, downarrow }) {
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
        <div className='banner_data'>
          <h1>{head}</h1>
          <p>{para}</p>
        </div>

        <div className="button-group" >
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