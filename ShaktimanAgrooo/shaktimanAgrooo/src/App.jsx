import React from 'react'
import Navbar from './navbar/Navbar'
import HeroSection from './heroSection/HeroSection'
import AboutSection from './aboutSection/AboutSection'
import SolutionSection from './solutionSection/SolutionSection'
import AnthemSection from './anthem-section/AnthemSection'
import OurCustomerSection from './ourCustomerSection/OurCustomerSection'
import LatestUpdateSection from './LatestUpdateSection/LatestUpdateSection'
import RightFlotedBtn from "./rightFlotedBtn/RightFlotedBtn"
import GuidenceSection from "./guidanceSection/guidenceSection"
import FooterSection from './Footer/FooterSection'
function App() {
  return (
    <>
      <RightFlotedBtn />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SolutionSection />
      <AnthemSection />
      <OurCustomerSection />
      <LatestUpdateSection />
      <GuidenceSection />
      <FooterSection />
    </>
  )
}

export default App
