import React from 'react'
import { logoIconsList } from '../constants'

const LogoIcon = ({item}) => {
    return(
        <div className='flex-none flex-center marquee-item'>
            <img src={item.imgPath}  />
        </div>
    )
}

const Logos = () => {
  return (
    <div className='md:my-20 my-10 relative'>
        <div className='gradient-edge'/>
        <div className='gradient-edge'/>
        <div className='marquee h-52'>
            <div className='marquee-box md:gap-12 gap-5'>
                 {logoIconsList.map((item) =>(
                    <LogoIcon key={item.imgPath} item={item} />
                 ))}
                 {logoIconsList.map((item) =>(
                    <LogoIcon key={item.imgPath} item={item} />
                 ))}
            </div>
        </div>
    </div>
  )
}

export default Logos