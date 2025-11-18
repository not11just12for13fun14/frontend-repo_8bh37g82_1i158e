import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import ContentGrid from './components/ContentGrid'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen w-full font-[Inter]">
      <Hero />
      <Features />
      <ContentGrid />
      <FinalCTA />
    </div>
  )
}

export default App
