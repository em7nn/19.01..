import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./index.scss"
import { Link } from 'react-router-dom';
import Navbar from '../../Layouts/Navbar';
import { Helmet } from "react-helmet";
function Products() {
    const [data, setData] = useState([])
    const [Search, setSearch] = useState("")
    useEffect(() => {
        axios.get(`http://localhost:3000/categories`).then((response) => {
            setData(response.data)
        })
    }, [])


    const deletefunc = (id) => {
        axios.delete(`http://localhost:3000/categories/${id}`)
            .then((response) => {
                axios.get(`http://localhost:3000/categories`)
                    .then((response) => {
                        setData(response.data)
                    })
            })
    }
    return (

        <>
            <Helmet>
                <title>Products</title>
            </Helmet>
            <Navbar />
            <button className='btn' onClick={() => { setData([...data].sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))) }}>name a-z</button>
            <button className='btn' onClick={() => { setData([...data].sort((a, b) => (a.description > b.description) ? 1 : ((b.description > a.description) ? -1 : 0))) }}>description a-z</button>
            <input onChange={(e) => setSearch(e.target.value)}/>
            {

data.filter((value) => {
    if (Search === "") {
        return value;
    } else if (value.name.toLowerCase().includes(Search.toLowerCase())) {
        return value;
    }
})
                
                
                .map((element) => {
                    return (
                        <>
                            <div className='yepa'>
                                <div className='miau'>
                                    <div className='card'>
                                        <img style={{ width: "300px" }} src={element.imageUrl} alt="imags" />
                                        <h3>{element.id}</h3>
                                        <h1>{element.name}</h1>
                                        <h2>{element.description}</h2>
                                        <Link to={`/detailpage/${element.id}`}><button>Go to</button></Link>
                                        <button onClick={() => deletefunc(element.id)}>delete</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )

                })
            }
        </>
    )
}

export default Products