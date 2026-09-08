import * as Three from 'three'
import React from 'react'

const HeroLight = () => {
  return (
    <>
        <spotLight position={[2, 5, 6]} penumbra={0.2} intensity={100} angle={0.15} color='white' />
        <spotLight position={[4, 5, 4]} penumbra={0.5} intensity={100} angle={0.3} color='#4cc9f0' />
        <spotLight position={[-3, 5, 5]} penumbra={0.1} intensity={100} angle={0.4} color='#9d4edd' />
        <primitive object={new Three.RectAreaLight('#A259FF', 10, 3, 2)} position={[1, 3, 4]} intensity={15} rotation={[-Math.PI / 4, Math.PI / 4 , 0 ]} />
        <pointLight position={[0,1,0]} intensity={10} color='#7209b7' />
        <pointLight position={[1,2,-2]} intensity={10} color='#0d00a4' />
        

    </>
    
  )
}

export default HeroLight