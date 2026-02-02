
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import VendingMachine3D from "./VendingMachine3D";

export default function Hero3D(){
  return (
    <div className="h-[80vh] bg-orange-500 relative">
      <Canvas camera={{position:[0,1.5,4]}}>
        <ambientLight intensity={1}/>
        <directionalLight position={[5,5,5]}/>
        <VendingMachine3D/>
        <OrbitControls enableZoom={false}/>
      </Canvas>
      <div className="absolute inset-0 flex items-center px-16 text-white">
        <h1 className="text-4xl font-bold">Healthy Snacks. Anytime. Anywhere.</h1>
      </div>
    </div>
  )
}
