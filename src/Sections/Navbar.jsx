import  { useState } from 'react'
import { navLinks } from '../constants'

const NavItems = () => {
    return(
        <ul className=' flex space-x-8'>
            {navLinks.map(({id, href, name}) => (
                <li key={id} className='text-neutral-400 font-bold  hover:text-white  cursor-pointer'>
                    <a href={href}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

 
function Navbar() {
    const [isOpen,setIsOpen] = useState(false)
    const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
};
    

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">

            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 border-b border-white padding-x">

                    
                    <a
                        href="/"
                        className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
                    >
                        Surafel 
                    </a>

                    
                    <button
                        onClick={toggleMenu}
                        className="text-neutral-400 hover:text-white focus:outline-none sm:hidden"
                        aria-label="Toggle Menu"
                    >
                        <img
                            src={isOpen ? "/images/x.svg" : "/images/menu.svg"}
                            alt=""
                        />
                    </button>

                
                    <nav className="hidden sm:flex">
                        <NavItems />
                    </nav>

                </div>
            </div>

            
            <div
                className={`sm:hidden   overflow-hidden transition-all duration-300 ${
                    isOpen
                        ? "max-h-screen opacity-100 "
                        : "max-h-0 opacity-0"
                }`}
            >
                <div className="p-5 bg-[#0D0D0D] w-[100%] justify-between  ">
                    <nav >
                        
                            <ul className=' flex justify-between flex-col space-y-3   space-x-8'>
                                {navLinks.map(({id, href, name}) => (
                                    <li key={id} className='text-neutral-400 font-bold  hover:text-white w-[100%] hover:bg-gray-700 p-2 cursor-pointer'>
                                        <a href={href}>
                                            {name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        
                    </nav>
                </div>
            </div>

        </header>
    )
}

export default Navbar
