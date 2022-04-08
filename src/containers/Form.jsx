import React from 'react';
import { Field, Formik } from 'formik';


export default function Form() {
    return (
        <>
            <Formik initialValues={{ email: '' }}>
                <Form>
                    <Field id="email" name="email" placeholder="Your email address" />
                    <button type="submit">Subscribe</button>
                </Form>
            </Formik>
        </>
    )
};