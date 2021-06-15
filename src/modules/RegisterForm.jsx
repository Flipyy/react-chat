import React from 'react';
import {Form} from "antd";
import {Link, useHistory} from "react-router-dom";
import {UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone} from '@ant-design/icons';
import {Formik} from "formik";

import {Block, Button, FormField} from "../components";
import validateForm from '../utils/validate';
import {useDispatch} from "react-redux";
import {fetchUserRegister} from "../redux/actions/user";

const RegisterForm = () => {

    const dispatch = useDispatch()
    let history = useHistory();

    return (<>
        <div className="auth__top">
            <h2>Регистрация</h2>
            <p>Для входа в чат, вам нужно зарегистрироваться</p>
        </div>
        <Block>

            <Formik
                initialValues={{email: "", fullname: "", password: "", password_2: ""}}
                validate={values => {
                    let errors = {}

                    validateForm({ isAuth: false, values, errors });

                    return errors
                }}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(fetchUserRegister(values)).then(({status}) => {

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
                        isValid,
                        isSubmitting
                    } = props

                         return (<Form onSubmit={handleSubmit} className="login-form">
                                 <FormField name="email"
                                            placeholder="E-Mail"
                                            icon={<MailOutlined className="site-form-item-icon"/>}
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                            touched={touched}
                                            errors={errors}
                                            values={values}/>
                                 <FormField name="fullname"
                                            placeholder="Ваше имя"
                                            icon={<UserOutlined className="site-form-item-icon"/>}
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
                                 <FormField name="password_2"
                                            placeholder="Повторите пароль"
                                            icon={<LockOutlined className="site-form-item-icon"/>}
                                            type="password"
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                            touched={touched}
                                            errors={errors}
                                            values={values}/>

                            <Form.Item>
                                <Button onClick={handleSubmit} disabled={isSubmitting} type="primary" size="large"
                                        htmlType="submit">Зарегистрироваться</Button>
                            </Form.Item>
                            <Link className="auth__register-link" to="/signin">Войти в аккаунт</Link>
                        </Form>
                    )
                }}
            </Formik>
        </Block>
    </>)
};

export default RegisterForm;