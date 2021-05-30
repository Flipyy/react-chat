import React from 'react';
import {Form, Input} from "antd";
import {Link} from "react-router-dom";
import {UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone} from '@ant-design/icons';
import {Formik} from "formik";

import {Block, Button} from "../components";
import validateForm from "../utils/validate";


const RegisterForm = () => (

    <>
        <div className="auth__top">
            <h2>Регистрация</h2>
            <p>Для входа в чат, вам нужно зарегистрироваться</p>
        </div>
        <Block>
            <Formik
                initialValues={{ email: "" , fullname: "", password: "", password2: ""}}
                validate={values => {
                    let errors = {}

                    validateForm({isAuth: false, values, errors})

                    return errors
                }}
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
            {props => {
                    const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset
                    } = props
                    return (
                        <Form onSubmit={handleSubmit} className="login-form">
                                <Form.Item validateStatus={!touched.email ? "" : errors.email ? "error" : "success"}
                                           help={!touched.email ? "" : errors.email}>
                                    <Input prefix={<MailOutlined className="site-form-item-icon"/>}
                                           placeholder="E-Mail"
                                           id="email"
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                           placeholder="Ваше имя"
                                           id="fullname"
                                    />
                                </Form.Item>
                                <Form.Item validateStatus={!touched.password ? "" : errors.password ? "error" : "success"}
                                           help={!touched.password ? "" : errors.password}>
                                    <Input prefix={<LockOutlined className="site-form-item-icon"/>}
                                        type="password"
                                        placeholder="Пароль"
                                        id="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Form.Item>
                                <Form.Item validateStatus={!touched.password ? "" : errors.password ? "error" : "success"}
                                           help={!touched.password ? "" : errors.password}>
                                    <Input prefix={<LockOutlined className="site-form-item-icon"/>}
                                        type="password"
                                        placeholder="Повторить пароль"
                                           id="password2"
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button onClick={handleSubmit} type="primary" size="large" htmlType="submit">Зарегистрироваться</Button>
                                </Form.Item>
                                <Link className="auth__register-link" to="/login">Войти в аккаунт</Link>
                            </Form>/*) : (
                                <div className="auth__success-block">
                                    <InfoCircleTwoTone style={{fontSize: "50px"}}/>
                                    <h3>Подтвердите свой аккаунт</h3>
                                    <p>На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
                                </div>)}*/

                    );
                }}
            </Formik>
        </Block>
    </>
);

export default RegisterForm;