import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './component/homePage/Hero'
import Stats from './component/homePage/Stats'
import VantaraTrust from './component/homePage/VantaraTrust'
import TextAnimation from './component/homePage/TextAnimation'
import Achivement from './component/homePage/Achivement'

function App() {

  return (
    <>
      
        <Hero />
        <Stats />
        <VantaraTrust />
        <TextAnimation />
        <Achivement />
    
    </>
  )
}

export default App
