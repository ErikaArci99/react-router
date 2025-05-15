import React from 'react'
import NavBar from './NavBar'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Products = () => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                setProducts(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <NavBar />
            <section className="products-section py-5">
                <div className="container text-center">
                    <h1 className="display-4 text-primary mb-5">I nostri prodotti</h1>
                    <div className="row justify-content-center">
                        {products.map((product) => (
                            <div className="col-md-4 mb-4" key={product.id}>
                                <div className="card product-card h-100 shadow-sm border-0">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="card-img-top product-img"
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text text-muted">{product.description}</p>
                                        <p className="fw-bold">${product.price}</p>
                                        <NavLink
                                            to={`/products/${product.id}`}
                                            className="btn btn-outline-primary mt-auto"
                                        >
                                            Scopri di più
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products