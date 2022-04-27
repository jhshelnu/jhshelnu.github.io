import { useContext, useRef } from "react";
import { useFrame } from "react-three-fiber";
import ColorContext from "../contexts/ColorContext";

function TorusKnot(props) {
    const mesh = useRef();
    const color = useContext(ColorContext);
    
    useFrame(({ clock }) => {
        // using the clock ensures the same perceived speed across devices despite frame rate differences
        const t = clock.getElapsedTime();
        mesh.current.rotation.x = 0.4 * t;
        mesh.current.rotation.y = 0.5 * t;
    })

    return (
        <mesh
            {...props}
            ref={mesh}
        >
            <torusKnotBufferGeometry
                args={[10, 2.7, 300, 30, 2, 3]} />
            <meshStandardMaterial 
                color={color}
                metalness={0.25}
                emissiveIntensity={0} />
        </mesh>
    );
}

export default TorusKnot;