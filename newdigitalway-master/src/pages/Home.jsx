import React from 'react'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Navbar from '../components/Navbar/Navbar'
import Partenaire from '../components/Partenaire/Partenaire'
import Service from '../components/Service/Service'

import '../App.css'


const Home = () => {
    return (
        <div className='main__home'>
            <Navbar />
            <Header />
            <About />
            <Main />
            <Service />
            <Partenaire />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home