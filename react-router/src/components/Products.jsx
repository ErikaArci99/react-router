import React from 'react'
import NavBar from './NavBar'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Products = () => {
    return (
        <>
            <NavBar />
            <h1>Products</h1>
        </>
    )
}

export default Products