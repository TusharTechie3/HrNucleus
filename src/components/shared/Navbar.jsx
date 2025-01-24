import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo1.png"

const Navbar = () => {
    // State to toggle mobile menu visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prevState => !prevState);
    }

    return (
        <>
        <div className='bg-white shadow-md fixed left-0 right-0 top-0 z-50'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-4 sm:px-6 md:px-8'>  
                <div>
                    <a href="/">
                        <img src={Logo} style={{height:'50px'}}/>
                    </a>
                </div>
              
                {/* Main Navbar */}
                <div className='flex items-center gap-12'>
                    <div className='hidden md:flex'>
                        <ul className='flex font-medium items-center gap-5'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/browse">Browse</Link></li>
                        </ul>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden'>
                        <Button 
                            variant="outline" 
                            className="h-10 w-10 p-2 rounded-md" 
                            onClick={toggleMobileMenu}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </Button>
                    </div>

                    {/* Mobile Menu Links (visible when mobile menu is open) */}
                    {isMobileMenuOpen && (
                        <div className='absolute top-16 right-0 bg-white shadow-md w-full md:hidden'>
                            <ul className='flex flex-col items-center gap-4 p-4'>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/browse">Browse</Link></li>
                            </ul>
                        </div>
                    )}

                    <div className='flex items-center gap-2'>
                        {/* Login/Signup buttons */}
                    </div>
                </div>
            </div>
        </div>

        {/* Padding for fixed navbar */}
        <div className='pt-20'></div>

        </>
    )
}

export default Navbar
