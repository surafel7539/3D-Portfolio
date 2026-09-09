import React from 'react'
import Header from '../components/Header'
import { expCards } from '../constants'
import GlowCard from '../components/GlowCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

  gsap.registerPlugin(ScrollTrigger)

const Journey = () => {

  useGSAP(() =>{
    gsap.utils.toArray('.timeline-card').forEach((card) => {
      gsap.from(card,
        {
          xPercent: -100,
          opacity: 0,
          transformOrigin: 'left left',
          duration: 1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%'
          }
        }

      )
      
    })
    
    gsap.to('.timeline',
        {
          transformOrigin: 'bottom bottom',
          ease: 'power1.inOut',
          scrollTrigger:{
            trigger: '.timeline',
            start: 'top center',
            end: '70% center',
            onUpdate: (self) =>{
            gsap.to('.timeline',
              {
                scaleY: 1 - self.progress
              }
            )
          }
          },
          
        }
      )
      gsap.utils.toArray('.expText').forEach((text) => {
      gsap.from(text,
        {
          xPercent: 0,
          opacity: 0,
          transformOrigin: 'left left',
          duration: 1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: text,
            start: 'top 60%'
          }
        }

      )
      
    })
  },[])

  return (
    <section id='journey' className='w-full md:mt-40 mt-20 section-padding  xl:px-0 '>
      <div className='w-full h-full md:px-20 px-5'>
        <Header title='My Journey ' sub='My Journey in Programming'/>
        <div className='mt-32 relative'>
          <div className='relative z-50 xl:space-y-32 space-y-10'>
            {expCards.map((item, index) =>(
              <div key={item.title} className='exp-card-wrapper'>
                <div className='xl:w-2/6'>
                  <GlowCard
                    item={item}
                    className="flex flex-row-reverse gap-3 justify-between items-center"
                    index={index}
                  >
                    
                  </GlowCard>
                </div>
                <div className='xl:w-4/6'>
                    <div className='flex items-start'>
                      <div className='timeline-wrapper'>
                          <div className='timeline'/>
                          <div className='gradient-line w-1 h-full'/>
                      </div>
                      <div className='expText flex xl:gap-20 md:gap-10 gap-5 relative z-20'>
                        <div className='timeline-logo'>
                          <img src={item.logoPath} alt={item.title} />
                        </div>
                        <div>
                          <h1 className='text-3xl text-white font-semibold'>{item.title}</h1>
                          <p className='my-5 text-white-50'>
                            📅{item.date}
                          </p>
                          <p className='text-[#839cb5] italic'>
                            Resposibilities
                          </p>
                          <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50'>
                            {item.responsibilities.map((res) => (
                              <li key={res} className='text-lg'>
                                {res}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey