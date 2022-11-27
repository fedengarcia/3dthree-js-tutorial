import React,{useRef, useEffect, useState} from 'react'
// import * as THREE from 'three';
// import { Scene, PerspectiveCamera, WebGL3DRenderTarget } from 'three';
// import CreateEscene from '../hooks/createEscene';
import { Canvas, useFrame } from 'react-three-fiber';
import Cube from './Cube';
import Sphere from './Sphere'
import { GEOMETRY_FORMS } from '../CONSTANTS';
import { OrbitControls } from '@react-three/drei';

const SceneComponent = () => {
    const [geometryArray, setGeometryArray] = useState(GEOMETRY_FORMS);


    return (
    
    // Gl render to modify toneMapping, encoding, pixelRatio, etc
        <Canvas
            // gl={{toneMapping: ASESFilmicTopMapping}}
            camera={{position: [0,4,8]}}

        >
            <ambientLight/>
            <pointLight position={[10,10,10]} />
            <directionalLight color="red" position={[0, 0, 5]} />

            {geometryArray.length > 0 && geometryArray.map(geometry => (
                  <>
                    {geometry.type === 'cube' && <Cube key={geometry.id} color={geometry.color} position={geometry.position} rotationVelocity={geometry.rotationVelocity}/>}
                    {geometry.type === 'sphere' && <Sphere key={geometry.id} color={geometry.color} position={geometry.position} rotationVelocity={geometry.rotationVelocity}/>}
                  </>
               ))
            } 
                <OrbitControls/>
            
            {/* <Cube color={'green'} rotationVelocity={0.02}/> */}

        </Canvas>
    );
}

export default SceneComponent;
