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
        <div>SingleProduct</div>
    )
}

export default SingleProduct;