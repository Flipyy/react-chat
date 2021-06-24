import React from 'react';
import {Form} from "antd";
import { LockOutlined, MailOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

import {Block, Button, FormField} from "../components";
import validateForm from "../utils/validate";
import {Formik} from "formik";
import {useDispatch} from "react-redux";
import {fetchUserLogin} from "../redux/actions/user";
import { useHistory } from "react-router-dom";

const LoginForm = () => {

    const dispatch = useDispatch()
    let history = useHistory();

    return (<>
        <div className="auth__top">
            <h2>Войти в аккаунт</h2>
            <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Block>
            <Formik
                initialValues={{email: "", password: ""}}
                validate={values => {
                    let errors = {}

                    validateForm({isAuth: true, values, errors})

                    return errors
                }}

                onSubmit={(values, { setSubmitting }) => {
                    dispatch(fetchUserLogin(values)).then(({status}) => {

                        if (status === "success") {
                            setTimeout(() => {
                                history.push("/")
                            }, 100)
                        }
                        setSubmitting(false)
                    }).catch(() => {
                        setSubmitting(false)
                    })
                }}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                    } = props
                    return (
                        <Form onSubmit={handleSubmit} className="login-form">
                            <FormField name="email"
                                       placeholder="E-Mail"
                                       icon={<MailOutlined className="site-form-item-icon"/>}
                                       handleChange={handleChange}
                                       handleBlur={handleBlur}
                                       touched={touched}
                                       errors={errors}
                                       values={values}/>


                            <FormField name="password"
                                       placeholder="Пароль"
                                       icon={<LockOutlined className="site-form-item-icon"/>}
                                       type="password"
                                       handleChange={handleChange}
                                       handleBlur={handleBlur}
                                       touched={touched}
                                       errors={errors}
                                       values={values}/>
                            <Form.Item>
                                <Button onClick={handleSubmit} disabled={isSubmitting} type="primary" size="large" htmlType="submit">Войти в аккаунт</Button>
                            </Form.Item>
                            <Link className="auth__register-link" to="/signup">Зарегистрироваться</Link>
                        </Form>)
                }}
            </Formik>
        </Block>
    </>)
}

export default LoginForm;