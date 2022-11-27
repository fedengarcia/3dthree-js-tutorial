import React,{useRef, useEffect} from 'react'
// import * as THREE from 'three';
// import { Scene, PerspectiveCamera, WebGL3DRenderTarget } from 'three';
// import CreateEscene from '../hooks/createEscene';
import { Canvas, useFrame } from 'react-three-fiber';
import Cube from './Cube';

const SceneComponent = () => {

    return (
        <Canvas
            camera={{position: [0,4,8]}}
            style={{
                height: '100vh',
                background:'red',
            }}
        >
            <ambientLight intensity={0.4} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <Cube/>
        </Canvas>
    );
}

export default SceneComponent;
