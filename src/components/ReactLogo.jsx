import { useGSAP } from '@gsap/react'
import { Float, useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import React, { useRef } from 'react'

const ReactLogo = (props) => {
    const { scene } = useGLTF('/models/react_logo.glb')
    const reactRef = useRef()
    
  return (
    <Float floatIntensity={1}>
        <mesh {...props}   ref={reactRef} >
        <primitive object={scene}/>
        
    </mesh>
    </Float>
    
  )
}

export default ReactLogo