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
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div>Dettaglio prodotto</div>
                </div>
                <div className="col-12">
                    <img src={product.image} alt="" />
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;