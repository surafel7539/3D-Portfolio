import { Float, useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

function Tailwind(props) {
    const { scene } = useGLTF('/models/tailwind_css_logo__3d_model(1).glb')
    const tailwindRef = useRef()
  return (
    <Float floatIntensity={1}  >
        <mesh {...props} ref={tailwindRef} >
        <primitive object={scene} />
    </mesh>
    </Float>
  )
}

export default Tailwind