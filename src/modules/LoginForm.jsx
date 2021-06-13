import React from 'react';
import {Form, Input} from "antd";
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

import {Block, Button} from "../components";
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
                            }, 50)
                        }
                        setSubmitting(false)
                    })
                }}
            >
                {props => {
                    const {
                        touched,
                        errors,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    } = props
                    return (
                        <Form onSubmit={handleSubmit} className="login-form">
                            <Form.Item validateStatus={!touched.email ? "" : errors.email ? "error" : "success"}
                                       help={!touched.email ? "" : errors.email}>
                                <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                       placeholder="E-Mail"
                                       id="email"
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       autocomplete="off"
                                />
                            </Form.Item>
                            <Form.Item validateStatus={!touched.password ? "" : errors.password ? "error" : "success"}
                                       help={!touched.password ? "" : errors.password}>
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    placeholder="Пароль"
                                    id="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autocomplete="off"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button onClick={handleSubmit} type="primary" size="large" htmlType="submit">Войти в аккаунт</Button>
                            </Form.Item>
                            <Link className="auth__register-link" to="/register">Зарегистрироваться</Link>
                        </Form>)
                }}
            </Formik>
        </Block>
    </>)
}

export default LoginForm;