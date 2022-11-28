import './Service.css'
import img1 from '../../assets/icons/img1.svg'
import img2 from '../../assets/icons/img2.svg'
import img3 from '../../assets/icons/img3.svg'
import img4 from '../../assets/icons/img4.svg'
import img5 from '../../assets/icons/img5.svg'
import img6 from '../../assets/icons/img6.svg'
import img7 from '../../assets/icons/img7.svg'
import img8 from '../../assets/icons/img8.svg'
import img9 from '../../assets/icons/img9.svg'


const Service = () => {
    return (
        <section className='service' id='service'>
            <div className="service__container container section">
                <h1 className='section__titleService'>Nos services</h1>
                <div className="service__content">

                    <div className="service__box">
                        <img src={img1} alt="" />
                        <h2>Ingénierie de logiciels</h2>
                    </div>
                    <div className="service__box">
                        <img src={img2} alt="" />
                        <h2>Infrastructure IT et réseaux</h2>
                    </div>
                    <div className="service__box">
                        <img src={img3} alt="" />
                        <h2>Securité des systèmeS d’information</h2>
                    </div>
                    <div className="service__box">
                        <img src={img4} alt="" />
                        <h2>Réalisation Data Center</h2>
                    </div>
                    <div className="service__box">
                        <img src={img5} alt="" />
                        <h2>Hébergement</h2>
                    </div>
                    <div className="service__box">
                        <img src={img6} alt="" />
                        <h2>Développement des applications mobile</h2>
                    </div>
                    <div className="service__box">
                        <img src={img7} alt="" />
                        <h2>Audit Informatique</h2>
                    </div>
                    <div className="service__box">
                        <img src={img8} alt="" />
                        <h2>Conseil et Assistance à la maîtrise d’ouvrage</h2>
                    </div>
                    <div className="service__box">
                        <img src={img9} alt="" />
                        <h2>Formation</h2>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Service