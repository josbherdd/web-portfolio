import { Canvas } from '@react-three/fiber'
import {  Environment, SoftShadows } from '@react-three/drei'
import { EffectComposer, DepthOfField } from '@react-three/postprocessing'
import BackgroundModels from './assets/BackgroundModels'
import NoiseOverlay from './assets/NoiseOverlay'
import Navbar from './components/Navbar'
import  Home from './components/Home'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Work from './components/Work'
import NoiseFixed from './assets/NoiseFixed'


export default function App() {
  return (
    <>
    <Navbar />
    
    <Canvas id="r3f-bg" orthographic camera={{position: [0, 10, 200], zoom: 150}} shadows>

      <ambientLight intensity={0.7} />
      
      <Environment background={ false } environmentIntensity={0.15} files={ './models/courtyard.exr' } />
      
      <pointLight
        position={[1, 1, 5]}    
        intensity={90}
        distance={30}
        decay={2}
        color="#ff7a00"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight
        position={[-3, -1, -15]}     
        intensity={20}
        distance={30}
        decay={2}
        color="#ff7a00"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <SoftShadows />

      <BackgroundModels scale={1} />

       <EffectComposer>
         <DepthOfField
          focusDistance={0}     // Enfoca "nada" → blur total
          focalLength={0}       // Fuerza desenfoque global
          bokehScale={6}        // Ajusta intensidad del blur
        />
      </EffectComposer>
    </Canvas>


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Work" element={<Work/>} />
    </Routes>
    

    <NoiseOverlay />
    <NoiseFixed />
    </>
  )
}

