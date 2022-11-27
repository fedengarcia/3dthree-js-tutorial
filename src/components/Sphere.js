import React,{useRef, useEffect} from 'react';
import { useFrame } from 'react-three-fiber';
import { Mesh } from 'three';


const Sphere = ({color, rotationVelocity, position }) => {
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
            <sphereGeometry args={[2,2,2]}/>
            <meshNormalMaterial color={color ?? 'blue'}/>
        </mesh>

    )
}

export default Sphere;
