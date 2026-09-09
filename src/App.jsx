import React from 'react'
import './index.css'
import Hero from './Sections/Hero'
import Projects from './Sections/Projects'
import Navbar from './Sections/Navbar'
import Logos from './Sections/Logos'
import Cards from './Sections/Cards'
import Journey from './Sections/Journey'


function App() {


    return (
        <main className='nax-w-7xl mx-auto'>
            <Navbar/>
            <Hero/>
            <Projects/>
            <Cards/>
            <Journey/>
            
        </main>
    )
}

export default App
