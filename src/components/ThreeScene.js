import { Canvas } from 'react-three-fiber';
import './ThreeScene.css';
import TorusKnot from './TorusKnot';
import ColorContext from '../contexts/ColorContext';
import { useContext } from 'react';

function ThreeScene({ onPointerDown }) {
    const colorContextValue = useContext(ColorContext);

    return (
        <Canvas 
            className="webgl"
            onPointerDown={onPointerDown}
        >
            {/* 
                react-three-fiber uses a separate renderer than the normal ReactDOM.render
                Unfortunately, this means context-providing parents of the Canvas are considered "foreign" to the children of the Canvas
                Consuming context inside of the Canvas requires re-providing the context inside of the Canvas.
                It's a nasty little "gotcha" that wasted almost a full hour of my life I'll never get back.

                For reference: https://docs.pmnd.rs/react-three-fiber/advanced/gotchas#consuming-context-from-a-foreign-provider
            */}
            <ColorContext.Provider value={colorContextValue}>
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
            </ColorContext.Provider>

        </Canvas>
    );
}

export default ThreeScene;