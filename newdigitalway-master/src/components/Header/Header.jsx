import './Header.css'
import pc from '../../assets/image/PC.svg'
import expertise from '../../assets/icons/expertise.svg'
import qualité from '../../assets/icons/qualité.svg'
import prix from '../../assets/icons/prix.svg'
import profession from '../../assets/icons/profession.svg'
import time from '../../assets/icons/time.svg'
import responsable from '../../assets/icons/responsable.svg'
import ScrollDown from './ScrollDown/ScrollDown'
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground'
// import data from "./data.json"

const Header = () => {
    return (
        <section className='header'>
            <div className="header__container container">
                <div className="header__content">
                    <h1><span>Empruntez</span>  notre chemin vers une digitalisation absolue</h1>
                    <div className="header__info">
                        <div className="header__box">
                            <img src={expertise} alt="" />
                            <p>Expertise</p>
                        </div>
                        <div className="header__box">
                            <img src={qualité} alt="" />
                            <p>Qualité</p>
                        </div>
                        <div className="header__box">
                            <img src={prix} alt="" />
                            <p>Excellent prix</p>
                        </div>
                        <div className="header__box">
                            <img src={profession} alt="" />
                            <p>professionnalisme</p>
                        </div>
                        <div className="header__box">
                            <img src={time} alt="" />
                            <p>respect timing</p>
                        </div>
                        <div className="header__box">
                            <img src={responsable} alt="" />
                            <p>Responsabilité</p>
                        </div>
                    </div>
                </div>
                <img src={pc} alt="" className='header__img' />
                <div className="background">
                    <ParticlesBackground />
                </div>
            </div>
        </section>
    )
}

export default Header