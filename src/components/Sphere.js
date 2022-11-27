import React,{useRef, useEffect} from 'react';
import { useFrame } from 'react-three-fiber';
import { Mesh } from 'three';


const Sphere = ({color, rotationVelocity }) => {
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
            <sphereGeometry args={[3,3,3]}/>
            <meshNormalMaterial color={color ?? 'blue'}/>
        </mesh>

    )
}

export default Sphere;
