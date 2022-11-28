import './Contact.css'
import logo from '../../assets/logo/logo.svg'
const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <div className="contact__container section container">
                <div className="contact__content">
                <h1 className='section__titleService'>contactez nous</h1>
                    <div className="contact__left">
                        <div className="contact__info">
                            <h2>N'hésitez pas à nous contacter pour toutes infromations complémentaires.
                            </h2>
                            <p>Nos valeurs ajoutées se consentent à rendre l’activité de nos clients opérationnelle conformément aux exigences et la réglementation en vigueur, augmenter leur efficacité tout en garantissant la sécurité de leurs infrastructures sans négliger l’optimisation des coûts et temps.</p>
                        </div>
                        <img src={logo} alt="" />
                    </div>
                    <div className="contact__right">
                        <form className='contact__form'>
                            <div className="inputBox">
                                <input type="text" required />
                                <span>Nom et Prénom</span>
                            </div>
                            <div className="inputBox">
                                <input type="email" required />
                                <span>E-mail</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" required />
                                <span>Numéro tel:</span>
                            </div>
                            <div className="inputBox">
                                <textarea name="project" cols="30" rows="10"
                                    className='text__area' required>
                                </textarea>
                                <span>Message</span>
                            </div>
                            <button className='contact__button' type='submit'>Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact