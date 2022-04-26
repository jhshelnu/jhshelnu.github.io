import { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";

function Box(props) {
    const mesh = useRef();
    const [clicked, setClicked] = useState(false);
    const [hovered, setHovered] = useState(false);

    useFrame((state, delta) => {
        mesh.current.rotation.x += 0.008;
        mesh.current.rotation.y += 0.008;

        // mesh.current.position.x = updatePosition[0];
        // mesh.current.position.y = updatePosition[1];
        // mesh.current.position.z = updatePosition[2];
    });

    return (
        <mesh
            {...props}
            ref={mesh}
            onClick={() => setClicked(!clicked)}
            scale={clicked ? 1.5 : 1}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'blue'} />
        </mesh>
    );
}

export default Box;