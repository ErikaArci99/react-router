import React from 'react'
import NavBar from './NavBar'

const AboutUs = () => {
    return (
        <>
            <NavBar />
            <section className="aboutus-section d-flex flex-column align-items-center justify-content-center text-center">
                <h1 className="display-4 text-primary mb-3">Chi siamo</h1>
                <p className="lead text-muted mb-4 px-3">
                    Siamo un team appassionato, dedicato a offrire prodotti di qualità e un'esperienza utente eccezionale.
                    La nostra missione è aiutarti a trovare ciò che cerchi con semplicità e stile.
                </p>
                <a href="/contacts" className="btn btn-outline-primary shadow-sm px-4">
                    Contattaci
                </a>
            </section>
        </>
    )
}

export default AboutUs