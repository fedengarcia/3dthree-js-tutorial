import React,{useRef, useEffect} from 'react';
import { useFrame } from 'react-three-fiber';
import { Mesh } from 'three';


const Cube = ( {color, rotationVelocity} ) => {
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
        <mesh position={[0,0,0]} ref={meshRef}>
            <boxGeometry args={[2,2,2]}/>
            {/* <sphereGeometry args={[3,3,3]}/> */}
            {/* <octahedronGeometry args={[2,2,2]}/> */} 
            <meshStandardMaterial />
            {/* <meshNormalMaterial/> */}
            {/* <meshBasicMaterial/> */}
        </mesh>

    )
}

export default Cube;
