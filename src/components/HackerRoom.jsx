import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

const Room = (props) => {
  const { scene } = useGLTF('/models/hacker_room_-_stylized.glb')
  const roomRef = useRef()
 


  return (
    <mesh {...props} ref={roomRef} >
      <primitive object={scene} />
    </mesh>
  )
}

export default Room