import { Float, useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Target = (props) => {
    const targetRef = useRef()
    const { scene } = useGLTF('/models/target-stand.gltf')
    
  return (
    <Float floatIntensity={1}>
        <mesh {...props}  ref={targetRef}>
            <primitive object={scene}/>
        </mesh>
    </Float>
  )
}

export default Target