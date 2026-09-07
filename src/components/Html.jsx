import React, { useRef} from 'react'
import { useGLTF, Float, Sparkles } from '@react-three/drei'

function Html(props) {
  const { scene } = useGLTF('/models/html_logo_3d_model.glb')
      const htmlRef = useRef()
    return (
      <Float floatIntensity={0.2}  >
        
            <mesh {...props} ref={htmlRef} >
            <primitive object={scene} />
            </mesh>
      </Float>
    )
}

export default Html