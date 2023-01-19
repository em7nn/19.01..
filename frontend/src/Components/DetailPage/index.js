import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../Layouts/Navbar';
import { Helmet } from "react-helmet";
function DetailPage() {
    const { id } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/categories/${id}`).then((response) => {
            setData(response.data)
        })
    }, [])
    return (
        <>
            <Helmet>
                <title>{data.name}</title>
            </Helmet>
            <Navbar />
            {
                <>
                    <div className='yepa' >
                        <div className='miau'>
                            <div className='card'>
                                <img style={{ width: "300px" }} src={data.imageUrl} alt="imags" />
                                <h3>{data.id}</h3>
                                <h1>{data.name}</h1>
                                <h2>{data.description}</h2>
                                <Link to="/"><button>Go back</button></Link>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default DetailPage