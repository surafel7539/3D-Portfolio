import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {  OrbitControls, PerspectiveCamera, Sparkles } from '@react-three/drei'
import Room from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Tailwind from '../components/Tailwind'
import Html from '../components/Html'
import HeroCamera from '../components/HeroCamer'
import Button from '../components/Button'

const Hero = () => {
    // const x = useControls({
    //     positionX:{
    //         value:2.5,
    //         max: 40,
    //         min: -20
    //     },
    //     positionY:{
    //         value:2.5,
    //         max: 20,
    //         min: -40
            
    //     },
    //     positionZ:{
    //         value:2.5,
    //         max: 20,
    //         min: -20
    //     },
    //     rotationX:{
    //         value:2.5,
    //         min: -Math.PI,
    //         max: Math.PI
    //     },
    //     rotationY:{
    //         value:2.5,
    //         min: -Math.PI,
    //         max: Math.PI
    //     },
    //     rotationZ:{
    //         value:2.5,
    //         min: -Math.PI,
    //         max: Math.PI
    //     },
    //     scale:{
    //         value:2.5,
    //         min: -Math.PI,
    //         max: Math.PI
    //     }
    // })
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({maxWidth: 1024, minWidth: 768})

  return (
    <section className='min-h-screen w-full flex flex-col relative'>
        <div className='w-full mx-auto flex  flex-col sm:mt-26 mt-20 padding-x gap-3 '>
            <p className='text-neutral-200 sm:text-xl text-xl font-bold text-center font-generalsans'>Hi, My name is Surafel Zewdu <span className='waving-hand'>👋</span></p>
            <p className='hero-text  text-white'>Building Websites With Modern Design</p>
        </div>
        <div className='w-full h-full absolute inset-0  '>
            
            <Canvas className='w-full h-full '>
                <Suspense fallback={<CanvasLoader/>}>
                    <PerspectiveCamera makeDefault position={[0,0,30]}/>
                    <HeroCamera isMobile={isMobile}>
                        <Room scale={isMobile ? 0.09 : 0.1} rotation={[0, -Math.PI, 0]} position={[1.3,-8.3 , 1.7]}   />
                    </HeroCamera>
                    <Sparkles 
                    count={100}
                    scale={20}
                    size={4}
                    speed={0.5}/>
                    
                    <group>
                        <Target  scale={isMobile ? 1.3 : isTablet ? 1.7 : 2 } position={isMobile ? [-7.5, -10.7, 3.3] : isTablet ? [-13.5, -11.5, -0.7] : [-16.7,-9.9, 3.3] } rotation={[3.04, 3.14, -2.66]} />
                        <ReactLogo scale={isMobile ? 0.6 : isTablet ? 0.8 : 1 } position={isMobile ? [8.5, 2.5, 1.7] : isTablet ? [14.1, 2.1, 3.3]  : [18.5, 1.3, 2.5] } rotation={[-0.20, 3.04, 1.84]} />
                        <Tailwind scale={isMobile ? 20 : 35 } position={ isMobile ? [-5.1,2.9,10.5] : [-16.7, 1.3, 5.3]} rotation={[-Math.PI, 2.74, 0.10]} />
                        <Html scale={isMobile ? 0.03 : 0.04} position={isMobile ? [14.5, -18.5, -20 ] : [28.9, -20, -20] } rotation={[ -Math.PI, 2.98, Math.PI ]}/>
                    </group>
                    <ambientLight intensity={1} />
                    <directionalLight position={[10,10,10]} />
                    
                    
                    
                </Suspense>
                
            </Canvas>
        </div>
        <div className='absolute bottom-7 flex justify-center items-align left-0 right-0 w-full z-10 padding-x '>
            <a href="#contact" className='w-fit'>
                <Button name="Let's Work together " isBeam containerClass="sm:w-fit w-full sm:min-w-96 "/>
            </a>
        </div>
    </section>
  )
}

export default Hero