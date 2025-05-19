import React from 'react';
import Banner_single from './Banner_single';
import modal3 from '../Images/model-3.jpg';
import modaly from '../Images/model-y.jpg'
import modelS from '../Images/model-s.jpg'
import modelx from '../Images/model-x.jpg'
import solarroof from '../Images/solar-roof.jpg'
import accesories from '../Images/accessories.jpg'
import downarrow from "../Images/down-arrow.svg"

function Banner() {
  return (
    <>
      <Banner_single
        imagedata={modal3}
        
        head="Model 3"
        para="Order Online for touchless delivery"
        btnone="CUSTOM ORDER"
        btntwo="EXISTING INVENTORY"
        downarrow={downarrow}
      />
      <Banner_single
        imagedata={modaly}
        head="Model Y"
            para="Order Online for touchless delivery"
        btnone="CUSTOM ORDER"
        btntwo="EXISTING INVENTORY"
      />
      <Banner_single
        imagedata={modelS}
        head="Model S"
           para="Order Online for touchless delivery"
        btnone="CUSTOM ORDER"
        btntwo="EXISTING INVENTORY"
      />
       <Banner_single
        imagedata={modelx}
        head="Model X"
           para="Order Online for touchless delivery"

        btnone="CUSTOM ORDER"
        btntwo="EXISTING INVENTORY"
      />
          <Banner_single
        imagedata={solarroof}
        head="Solar Roof"
           para="Lower Cost Solar Panels in India"

        btnone="ORDER NOW"
        btntwo="LEARN MORE"
      />
       <Banner_single
        imagedata={accesories}
        head="Accessories"
        btnone="ORDER NOW"
       
      />
    </>
  );
}

export default Banner;