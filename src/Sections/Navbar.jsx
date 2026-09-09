import React from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <header className='navbar  '>
        <div className='inner   '>
            <a className='logo' href="#hero">
                Surafel | Sucha
            </a>
            <nav className='desktop'>
                <ul>
                    {navLinks.map((item) => (
                        <li key={item.name} className='group'>
                            <a href={item.link}>
                                <span>{item.name}</span>
                                <span className='underline'/>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <a href="#contact" className='contact-btn group'>
                <div className='inner'>
                    <span>Contact Me</span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default Navbar