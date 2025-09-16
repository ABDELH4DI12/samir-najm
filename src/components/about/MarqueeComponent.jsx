import React from 'react'
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <Marquee gradient speed={75} className=''>
        <img className="w-[50px] mr-24" src="/assets/ps.png" alt="Photoshop" />
        <img className="w-[50px] mr-24" src="/assets/ill.png" alt="Illustrator" />
        <img className="w-[50px] mr-24" src="/assets/indesign.png" alt="Indesign" />
        <img className="w-[50px] mr-24" src="/assets/meta.png" alt="Meta" />
        <img className="w-[50px] mr-24" src="/assets/ps.png" alt="Photoshop" />
        <img className="w-[50px] mr-24" src="/assets/ill.png" alt="Illustrator" />
        <img className="w-[50px] mr-24" src="/assets/indesign.png" alt="Indesign" />
        <img className="w-[50px] mr-24" src="/assets/meta.png" alt="Meta" />
    </Marquee>
  )
}

export default MarqueeComponent
