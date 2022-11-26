import React,{useRef, useEffect} from 'react'
// import * as THREE from 'three';
// import { Scene, PerspectiveCamera, WebGL3DRenderTarget } from 'three';
// import CreateEscene from '../hooks/createEscene';
import { Canvas } from 'react-three-fiber';
const SceneComponent = () => {



    return (
        <Canvas
            camera={{position: [0,8,4]}}
            style={{
                height: '100vh',
                background:'red',
            }}
        >
            <ambientLight intensity={
                0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <mesh position={[0,0,0]}>
                {/* <boxGeometry args={[2,2,2]}/> */}
                 <sphereGeometry args={[3,3,3]}/>
                {/* <octahedronGeometry args={[2,2,2]}/> */} 
                {/* <meshStandardMaterial /> */}
            {/* <meshNormalMaterial/> */}
            <meshBasicMaterial/>
            </mesh>

        </Canvas>
    );
}

export default SceneComponent;
