import React from 'react'
import './Footer.css'
import logo from '../../assets/logo/logo.svg'
import fb from '../../assets/icons/facebook.png'
import tweeter from '../../assets/icons/twtr.png'
import insta from '../../assets/icons/insta.png'
import linkd from '../../assets/icons/linkd.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__content container">
                <div className="footer__left">
                    <div className="footer__logo">
                        <img src={logo} alt="" />
                    </div>
                    <h2 className="footer__title">NEW DIGITAL WAY</h2>
                    <p className="footer__desc">New Digital Way est une société spécialisée dans la digitalisation des entreprises, propose des solutions
                        informatiques et accompagne ses clients dans leur croissance et évolutions technologiques. avec new
                        digital way amenez votre entreprise à l'ère numérique.
                    </p>
                    <ul className="footer__info">
                        <li>Abban Ramdan, Alger Centre</li>
                        <li>info@newdigitalway.dz</li>
                        <li>(+213) 770 69 22 21</li>
                    </ul>
                    <div className="footer__media">
                        <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100088202586934"><img src={fb} alt="" /></a>
                        <a href="https://twitter.com/NEWDIGITAL_WAY"><img src={tweeter} alt="" /></a>
                        <a href="https://www.instagram.com/newdigitalway/"><img src={insta} alt="" /></a>
                        <a href="https://www.linkedin.com/company/newdigitalway/"><img src={linkd} alt="" /></a>
                    </div>
                </div>
                <div className="footer__right">
                    {/* <img src={Mask} alt="" /> */}
                    <iframe className="gmap_iframe" style={{ width: '100%', height: '300px', borderRaduice: '20px' }} src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=new digital way&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
            <div className="footer__information">
                <span> Copyright &#169; <span className='digital'>New Digital Way</span>  | Tous Droits Réservés. </span>
            </div>

        </div>
    )
}

export default Footer