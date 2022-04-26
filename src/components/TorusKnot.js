import { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";

const colors = ['purple', 'blue', 'forestgreen', 'orangered'];

function TorusKnot(props) {
    const mesh = useRef();

    const [colorIndex, setColorIndex] = useState(0);

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
            onPointerDown={() => setColorIndex((colorIndex + 1) % colors.length)}
        >
            <torusKnotBufferGeometry
                args={[10, 2.7, 300, 30, 2, 3]} />
            <meshStandardMaterial 
                color={colors[colorIndex]}
                metalness={0.25}
                emissiveIntensity={0} />
        </mesh>
    );
}

export default TorusKnot;