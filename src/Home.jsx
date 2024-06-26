import {React, Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from './loader';
import Sky from './models/Sky';
import Island from './models/Island'
const Home = () => {
  const adjustIslandForScreenSize =()=>{
    let screenScale = null;
    let screenPosition =[0, -6.5, -43];
    let rotation = [0.1,4.7,0];
    if(window.innerWidth<768){
      screenScale=[0.6, 0.6, 0.6];
      screenPosition =[0, -6.5, -43];
    }else{
      screenScale=[1,1,1];
    }
    return [screenScale,screenPosition,rotation];
  }
  const [isLandScale, isLandPosition, islandRotation] = adjustIslandForScreenSize();
  return (
    <section className='w-full h-screen relative'> 
       {/* <div className='absolute top-28 left-0 right-0 z-10 flex
       items-center justify-center'>

       </div> */}

       <Canvas className='w-full h-screen bg-transparent'
       camera={{near:0.1,far:1000}}>
         <Suspense fallback={<loader/>}>
             <directionalLight position={[1,1,1]} intensity={2}/>
             <ambientLight intensity={0.5}/>
             <hemisphereLight skyColor="#b1e1ff" groundColor="#000000"
              intensity={1}
             />
             <Sky/>
             <Island position={isLandPosition}
              scale = {isLandScale}
              rotation = {islandRotation}
             />
         </Suspense>
       </Canvas>
    </section>
  )
}

export default Home