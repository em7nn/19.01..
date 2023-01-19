import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from "axios";
import * as Yup from 'yup';
import { Helmet } from "react-helmet";
import Navbar from '../../Layouts/Navbar';

function AddPage() {
    return (
        <>
            <Helmet>
                <title>Add Page</title>
            </Helmet>
            <Navbar />
            <Formik
                initialValues={{ name: '', description: '', imageUrl: '' }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    description: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    imageUrl: Yup.string()
                        .required('Required')
                })}
                onSubmit={(values) => {
                    axios.post("http://localhost:3000/categories", values)
                }}
            >
                <Form>
                    <label htmlFor="name">Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" />

                    <label htmlFor="description">Description</label>
                    <Field name="description" type="text" />
                    <ErrorMessage name="description" />

                    <label htmlFor="imageUrl">imageUrl</label>
                    <Field name="imageUrl" type="text" />
                    <ErrorMessage name="imageUrl" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    )
}

export default AddPage