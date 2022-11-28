import './Goal.css'
import { BsCheckLg } from 'react-icons/bs';

const Goal = () => {

    return (

        <div className='goal'>
            <div className="goal__container section container">
                <h1 className='section__title'>NOTRE OBJECTIF EST CLAIR</h1>
            </div>
            <div className="goal__content">
                <div className="goal__box">
                    <BsCheckLg className='box__icon' />
                    <p>Respecter notre secteur d’activité et toutes les parties prenantes dans le marché
                        (Employés, clients, concurrents)
                    </p>
                </div>


                <div className="goal__box">
                    <BsCheckLg className='box__icon' />
                    <p>Tenir nos engagements en toute intégrité et transmettre de la crédibilité
                        vis-à-vis nos clients, et notre société
                    </p>
                </div>
                <div className="goal__box">
                    <BsCheckLg className='box__icon' />
                    <p>Développer les idées et créer les produits de qualité auxquels nous croyons
                        absolument
                    </p>
                </div>

                <div className="goal__box">
                    <BsCheckLg className='box__icon' />
                    <p>Agir avec honnêteté et transparence
                    </p>
                </div>
                <div className="goal__box">
                    <BsCheckLg className='box__icon' />
                    <p>Développer les idées et créer les produits de qualité auxquels nous croyons
                        absolument
                    </p>
                </div>
                <div className="goal__box">
                    <BsCheckLg className='box__icon' />
                    <p>Développer les idées et créer les produits de qualité auxquels nous croyons
                        absolument
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Goal