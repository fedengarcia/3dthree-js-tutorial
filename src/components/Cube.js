import React,{useRef, useEffect} from 'react';
import { useFrame } from 'react-three-fiber';
import { Mesh } from 'three';


const Cube = ( {color, rotationVelocity, position} ) => {
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
            <boxGeometry args={[2,2,2]}/>
            {/* <sphereGeometry args={[3,3,3]}/> */}
            {/* <octahedronGeometry args={[2,2,2]}/> */} 
            <meshStandardMaterial color={color ?? 'blue'}/>
            {/* <meshNormalMaterial/> */}
            {/* <meshBasicMaterial/> */}
            {/* <meshBasicMaterial attachArray="material" color="red" />
            <meshBasicMaterial attachArray="material" color="brown" />
            <meshBasicMaterial attachArray="material" color="yellow" />
            <meshBasicMaterial attachArray="material" color="pink" />
            <meshBasicMaterial attachArray="material" color="black" />
            <meshBasicMaterial attachArray="material" color="blue" /> */}
        </mesh>

    )
}

export default Cube;
