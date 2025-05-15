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
            <h1>Products</h1>
            <div className='products'>
                {products.map((product) => {
                    return (
                        <div className='product' key={product.id}>
                            <img src={product.image} alt={product.title} />
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                            <NavLink to={`/products/${product.id}`}>View Product</NavLink>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Products