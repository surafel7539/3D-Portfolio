import React from 'react'
import './index.css'
import Hero from './Sections/Hero'
import Projects from './Sections/Projects'
import Navbar from './Sections/Navbar'
import Logos from './Sections/Logos'
import Cards from './Sections/Cards'
import Journey from './Sections/Journey'
import TechStack from './Sections/TechStack'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'


function App() {


    return (
        <main className='nax-w-7xl mx-auto'>
            <Navbar/>
            <Hero/>
            <Projects/>
            <Cards/>
            <Journey/>
            <TechStack/>
            <Contact/>
            <Footer/>
            
        </main>
    )
}

export default App
