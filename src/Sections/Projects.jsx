import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
    const sectionRef = useRef(null)
    const project1ref = useRef(null)
    const project2ref = useRef(null)
    const project3ref = useRef(null)
    

    
    useGSAP(() =>{
        const projects = [project1ref.current, project2ref.current, project3ref.current]
        projects.forEach((card, index) => {
            gsap.fromTo(card,
                {
                    y:50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        });
        gsap.fromTo(sectionRef.current, 
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 1.5
            }
        )
    },[])
  return (
    <section className='app-showcase' ref={sectionRef} id='project'>
        <div className='w-full'>
            <div className='showcaselayout'>
                <div className='first-project-wrapper' ref={project1ref}>
                    <div className='image-wrapper '>
                        <img src="/images/Screenshot (53).png" alt="Telegram Lite" />
                    </div>
                    <div className='text-content'>
                        <h2>A Live Texting Website like Telegram</h2>
                        <p className='text-white-50 md:text-xl'>
                            A Website made with React(FrontEnd), Express JS(BackEnd), MongoDB(DataBase) and Socket.io for live messaging
                        </p>
                    </div>
                </div>
                <div className='project-list-wrapper overflow-hidden'>
                <div className='project' ref={project2ref}>
                    <div className='image-wrapper bg-[#ffefdb] '>
                        <img src="/images/Screenshot (49).png" alt="Dama MarketPlace" />
                    </div>
                    <h2>Dama Market-Place</h2>
                </div>
                <div className='project' ref={project3ref}>
                    <div className='image-wrapper bg-[#ffe7db] '>
                        <img src="/images/Screenshot (49).png" alt="Dama MarketPlace" />
                    </div>
                    <h2>Weather App</h2>
                </div>
            </div>
            </div>
            
        </div>
    </section>
  )
}

export default Projects