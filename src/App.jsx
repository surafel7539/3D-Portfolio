import React from 'react'
import './index.css'
import Hero from './Sections/Hero'
import Projects from './Sections/Projects'
import Navbar from './Sections/Navbar'


function App() {


    return (
        <main className='nax-w-7xl mx-auto'>
            <Navbar/>
            <Hero/>
            <Projects/>
            
        </main>
    )
}

export default App
