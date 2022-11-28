import './Emploi.css'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import React, { useState } from 'react'

const Emploi = () => {
    const [file, setFile] = useState(null)

    const handleUpload = (e) => {
        setFile(e.target.files[0])
    }
    return (
        <div className='emploi'>
            <Navbar />
            <div className="offre">
                <h1 className="offre__title"> <span>Rejoignez</span> Nous!</h1>
                <div className="offre__subtitle">N'hésitez pas à nous faire part de votre candidature spontanée!</div>
                <div className="offre__info">
                    <form>
                        <div className="inputBox">
                            <input type="text" required />
                            <span>Nom</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" required />
                            <span>Prénom</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" required />
                            <span>Prénom</span>
                        </div>
                        <div className="inputBox">
                            <input type="email" required />
                            <span>E-mail</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" required />
                            <span>Numéro tel:</span>
                        </div>
                    </form>
                    <span className='cv__title'>Votre curriculum vitae</span>
                    <form className="form">
                        <div className="upload">
                            <input type="file" name="photo" id="upload-photo" onChange={handleUpload} />
                            <label htmlFor="upload-photo">Choisissez un fichier</label>
                            <span className='custom__msg'>{file === null ? "Aucun fichier n'a encore été choisi" : file.name}</span>
                        </div>
                    </form>
                    <button className='contact__button' type='submit'>Envoyer</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Emploi