import './Navbar.css'
import logo from '../../assets/logo/logo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

// icons 
import {CgMenuLeft} from 'react-icons/cg'
import {IoClose} from 'react-icons/io5'





const Navbar = () => {
    
    const [sidebar , setSidebar] = useState(false)
    
    
    return (
        <>
            <div className='nav__toggle' id='nav-toggle' onClick={()=>{
                setSidebar(true)
            }}>
                <CgMenuLeft />
            </div>

            <div className={`sidebar container ${sidebar && 'show-sidebar'}`}>
                <nav className='nav'>
                    <div className='nav__logo'>
                        <a href='#home' className='nav__logo-text'>
                            <img src={logo} alt='New digital way' className='nav__logo-img' />
                        </a>
                    </div>
            
                    <div className='nav__menu'>
                        <div className='menu'>
                            <ul className='nav__list'>
            
                                <li className='nav__item' onClick={()=>{
                                    setSidebar(false)
                                }}>
                                    <Link to="/">
                                        <a href='#home' className='nav__link'>Accueil</a>
                                    </Link>
                                </li>
            
                                <li className='nav__item' onClick={()=>{
                                    setSidebar(false)
                                }}>
                                        <a href='#about' className='nav__link'>à propos de nous</a>
                                </li>
            
                                <li className='nav__item' onClick={()=>{
                                    setSidebar(false)
                                }}>
                                    <a href='#service' className='nav__link'>Nos services</a>
                                </li>
                                
                                <li className='nav__item' onClick={()=>{
                                    setSidebar(false)
                                }}>
                                    <Link to="/emploi">
                                        <a href="/" className="nav__link">
                                            Emploi
                                        </a>
                                    </Link>
                                </li>
            
            
                                <li className='nav__item' onClick={()=>{
                                    setSidebar(false)
                                }}>
                                    <a href='#contact' className='nav__link'>Contact</a>
                                </li>
            
                            </ul>
                        </div>
                    </div>
            
                   
            
                    <div className='nav__close' onClick={()=>{
                        setSidebar(false)
                    }}>
                        <IoClose />
                    </div>
                </nav>
            </div>
            
        </>
    )
}

export default Navbar