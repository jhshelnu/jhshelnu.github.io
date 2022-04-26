import { Canvas } from 'react-three-fiber';
import './ThreeScene.css';
import TorusKnot from './TorusKnot';


function ThreeScene() {
    return (
        <Canvas className="webgl">
            <ambientLight />
            <pointLight 
                position={[2, 3, 4]}
                intensity={0.6} />

            <pointLight 
                position={[-0.1, -0.1, -28]}
                intensity={3} />

            <TorusKnot
                position={[0, 6, -30]}
                scale={0.75} />

        </Canvas>
    );
}

export default ThreeScene;