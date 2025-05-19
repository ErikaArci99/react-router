import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const SingleProduct = () => {
    // mi dichiaro la variabile id destrutturando cio che mi restituisce il metodo useParams cioe un oggetto con i parametri passati tramite url
    const { id } = useParams();

    // dichiaro la variabile di stato che conterra il prodotto
    const [product, setProduct] = useState({});

    // funzione che mi recupera le informazioni del post tramite parametro
    const getProductsDetail = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
            setProduct(resp.data);
        });
    };

    useEffect(() => {
        getProductsDetail();
    }, []);


    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 text-center mb-4">
                    <h1 className="display-5 text-primary">Dettaglio Prodotto</h1>
                </div>
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-sm border-0 single-product-card">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="card-img-top product-img p-4"
                        />
                        <div className="card-body text-center">
                            <h3 className="card-title mb-3">{product.title}</h3>
                            <p className="text-muted">{product.description}</p>
                            <h4 className="text-success fw-bold">${product.price}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;