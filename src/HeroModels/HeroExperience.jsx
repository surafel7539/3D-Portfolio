import { OrbitControls, Sparkles, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React,{useRef} from 'react'
import { useReducer } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room'
import { Leva, useControls } from 'leva'
import HeroLight from './HeroLight'

const HeroExperience = () => {
    const isTablet = useMediaQuery({query:'(max-width: 1024px)'})
    const isMobile = useMediaQuery({query: '(max-width: 768px)'})
    const hero = useRef()
    
  return (
    <>
    
    <Canvas camera={{position: [0,0,15], fov: 45}} >
        
        <OrbitControls enablePan enableDamping enableZoom={!isTablet} enableRotate maxDistance={20} minDistance={5} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 5} />
        <HeroLight/>
        <Sparkles
  count={200}
  scale={15}
  size={3}
  speed={0.8}
  noise={1}
/>
        <group
         scale={isMobile ? 0.7 : isTablet ? 1 : 1.3}
         position={[0, -4, 0]}
         rotation={[0,-Math.PI / 4, 0]}
        >
            <Room />
        </group>
    </Canvas>
    </>
  )
}

export default HeroExperience