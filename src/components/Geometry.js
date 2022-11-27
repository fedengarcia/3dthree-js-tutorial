import React,{useRef, useEffect} from 'react';
import { useFrame } from 'react-three-fiber';
import { Mesh } from 'three';


const Geometry = ( {color, rotationVelocity, position, type} ) => {
    // const meshRef = useRef<Mesh>(null);
    const meshRef = useRef()
    useEffect(() => 
        console.log(meshRef)
    ,[])

     useFrame(() => {
        if(!meshRef){
            return
        }
        meshRef.current.rotation.x += rotationVelocity;
        meshRef.current.rotation.y += rotationVelocity;
    })

    return (
        <mesh position={position} ref={meshRef}>
            {type === 'cube' && <boxGeometry args={[2,2,2]}/>}
            {type === 'sphere' && <sphereBufferGeometry args={[2,2,2]}/>}
            {type === 'torus' && <torusBufferGeometry args={[2,2,2]}/>}
            

            <meshStandardMaterial color={color ?? 'blue'}/>

        </mesh>

    )
}

export default Geometry;
