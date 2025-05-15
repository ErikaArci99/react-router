import React from 'react'
import NavBar from './NavBar'

const Contacts = () => {
    return (
        <>
            <NavBar />
            <section className="contacts-section d-flex flex-column align-items-center justify-content-center text-center">
                <h1 className="display-4 text-primary mb-3">Contattaci</h1>
                <p className="lead text-muted mb-4 px-3">
                    Hai domande o richieste? Siamo qui per aiutarti!
                    Compila il modulo o scrivici direttamente via email.
                </p>
                <a href="thunthunthun@savur.com" className="btn btn-primary shadow-sm px-4">
                    Scrivici via Email
                </a>
            </section>
        </>
    )
}

export default Contacts