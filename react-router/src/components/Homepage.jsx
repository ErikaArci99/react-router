import React from 'react'
import NavBar from './NavBar'

const Homepage = () => {
    return (
        <>
            <NavBar />
            <header className="homepage-header d-flex flex-column align-items-center justify-content-center text-center">
                <h1 className="display-4 text-primary mb-3">Benvenuto!</h1>
                <p className="lead text-muted mb-2">
                    Questa è la home page del nostro shop online.
                </p>
                <p className="text-secondary mb-4">
                    Dai un'occhiata ai nostri prodotti cliccando qui sotto:
                </p>
                <a href="/products" className="btn btn-primary shadow-sm px-4">
                    Scopri i prodotti
                </a>
            </header>
        </>
    )
}

export default Homepage