import React from 'react'
import MarqueeComponent from './MarqueeComponent'

const About = () => {
  return (
    <div className='home_section container mx-auto'>
        <div className='py-[150px]'>
            <div className="collab_info flex gap-x-4 justify-center">
                <div className="images flex gap-x-2">
                    {/* <img src="/assets/Logo.jpeg" alt="" className='rounded-full w-7'/>
                    <img src="/assets/Logo.jpeg" alt="" className='rounded-full w-7'/>
                    <img src="/assets/Logo.jpeg" alt="" className='rounded-full w-7'/>
                    <img src="/assets/Logo.jpeg" alt="" className='rounded-full w-7'/> */}
                </div>
                <p className='text-lg text-gray-600'>Design is not what it looks like — it’s how it speaks</p>
            </div>

            <h1 className='text-center my-6 text-7xl font-bold'> Samir Portfolio </h1>

            <p className='text-center text-lg text-gray-600'>Creative Graphic Designer | Logos that Speak, Posters that Pop</p>

            <div className='w-[70%] mx-auto mt-20'>
              <MarqueeComponent className="w-[100px]" />
            </div>





        </div>
    </div>
  )
}

export default About