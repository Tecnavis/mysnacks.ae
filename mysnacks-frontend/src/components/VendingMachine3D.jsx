
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function VendingMachine3D(){
  const ref = useRef();
  const { scene } = useGLTF("/models/mysnacks-machine.glb");
  useFrame(()=> ref.current.rotation.y += 0.002);
  return <primitive ref={ref} object={scene} scale={1.3} position={[0,-1.2,0]}/>
}
