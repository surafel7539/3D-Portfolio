import React from 'react'
import { abilities } from '../constants'

const Cards = () => {
  return (
    <div className='w-full padding-x-lg  '>
        <div className='mx-auto grid-3-cols'>
            {abilities.map((item) =>(
                <div key={item.title} className='card-border rounded-xl p-8 flex flex-col gap-4'>
                    <div className='size-14 flex items-center justify-center rounded-full'>
                        <img src={item.imgPath} alt={item.title} />
                    </div>
                    <h3 className='text-white font-semibold text-2xl mt-2'>{item.title}</h3>
                    <p className='text-white-50 text-lg'>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cards