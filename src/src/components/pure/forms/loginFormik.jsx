import React from 'react';
import { useHistory } from 'react-router-dom';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                  .email('Invalid email format')
                  .required('Email is required'),
        password: Yup.string()
                  .required('password is required')
    }
);

const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }
    const history = useHistory();

    return (
       <div>
       <h4>Login Formik</h4>
        <Formik
        //*** Initial values that the form will take */
           initialValues = { initialCredentials }
           //*** Yup validation Schema ***
           validationSchema = {loginSchema}
           //*** onSubmit Event ***
           onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 1000));
            alert(JSON.stringify(values, null, 2));
            // We save the date in the localstorage
            await localStorage.setItem('Credentials', values);
            history.push('/profile');
        }}
        >
        {/* We obtein props from Formik*/}
        {({  values,
             touched,
             errors,
             isSubmitting,
             handleChange,
             handleBlur }) => (
                <Form>
                  <label htmlFor="email">Email</label>
                  <Field id="email" type='email' name="email" placeholder="example@email.com" />

                    {/*Email errors*/}
                   {
                    errors.email && touched.email && 
                    (
                        
                        <ErrorMessage name="email" component= 'div' />
                      
                    )
                   }
                  <label htmlFor="password">Password</label>
                <Field
                id="password"
                name="password"
                placeholder="password"
                type = 'password'
            />
            {/*Password errors*/}
            {
                    errors.password && touched.password && 
                    (
                        
                        <ErrorMessage name="password" component = 'div' />
                      
                    )
                   }
            <button type="submit">Login</button>
            {isSubmitting ? (<p>Login your credentials...</p>): null}
            </Form>
            )}
            
        </Formik>
       </div>
    );
}

export default LoginFormik;
