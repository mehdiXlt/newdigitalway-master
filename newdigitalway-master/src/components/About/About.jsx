import './About.css'
import imgAbout from '../../assets/image/img_about.svg'
import Button from '../Button/Button'
import Goal from '../Goal/Goal'
const About = () => {
    return (
        <section className='about' id='about'>
            <div className="about__container section container">
                <h1 className='section__title'>à propos de nous</h1>

                <div className="about__content">
                    <div className="about__desc">
                        <p> <span>New Digital Way</span>  est une entreprise spécialisée dans les technologies de l’information, elle est purement dédiée au secteur de la numérisation, notre création vient dans le but d’accélérer la transformation digitale via
                            l’offre de multiples services et le soutien de la croissance et le développement
                            technologique de nos clients et notre pays en particulier
                        </p>
                        <div className="about__btn">
                            <Button />
                        </div>
                    </div>
                    <img src={imgAbout} alt="" />
                </div>
                <Goal />
            </div>
        </section>
    )
}

export default About