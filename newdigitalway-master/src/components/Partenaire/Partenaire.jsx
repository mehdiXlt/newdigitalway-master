import React from 'react'
import './Partenaire.css'
import algerTelecom from '../../assets/icons/algerTelecom.png'
import insijem from '../../assets/icons/insijem.png'
import huawie from '../../assets/icons/huawie.png'
import djezzy from '../../assets/icons/djezzy.png'
import Ooredoo from '../../assets/icons/Ooredoo.png'
import Dell from '../../assets/icons/Dell.png'
import microsoft from '../../assets/icons/microsoft.png'
import Mobilis from '../../assets/icons/Mobilis.png'
import Intel from '../../assets/icons/Intel.png'
import logo from '../../assets/icons/logo.png'

const Partenaire = () => {
    return (
        <div className='partner'>
            <div className="partner__container section container">

                <h1 className="section__title">Nos partenaires</h1>
                <div className="partner__icon">
                    <img src={algerTelecom} alt="" />
                    <img src={insijem} alt="" />
                    <img src={huawie} alt="" />
                    <img src={djezzy} alt="" />
                    <img src={Ooredoo} alt="" />
                    <img src={Dell} alt="" />
                    <img src={microsoft} alt="" />
                    <img src={Mobilis} alt="" />
                    <img src={Intel} alt="" />
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Partenaire