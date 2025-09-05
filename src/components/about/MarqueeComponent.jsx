import React from 'react'
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <Marquee gradient speed={75} className=''>
        <img className="w-[50px] mr-24" src="/assets/ps.png" alt="Photoshop" />
        <img className="w-[50px] mr-24" src="/assets/ill.png" alt="JavaScript" />
        <img className="w-[50px] mr-24" src="/assets/blender.png" alt="Blender" />
        <img className="w-[50px] mr-24" src="/assets/ps.png" alt="Photoshop" />
        <img className="w-[50px] mr-24" src="/assets/ill.png" alt="JavaScript" />
        <img className="w-[50px] mr-24" src="/assets/blender.png" alt="Blender" />
    </Marquee>
  )
}

export default MarqueeComponent
