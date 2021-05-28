import React from 'react';
import {Form, Input} from "antd";
import {Link} from "react-router-dom";
import {UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone} from '@ant-design/icons';

import {Block, Button} from "../components";
import Icon from "antd/es/icon";


const RegisterForm = () => {
    const success = false
    return (
        <>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <Block>
                {success? <Form
                    me="normal_login"
                    className="login-form"
                    initialValues={{remember: true}}

                >
                    <Form.Item
                        name="email"
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon"/>} placeholder="E-Mail"/>
                    </Form.Item>
                    <Form.Item
                        name="username"
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Ваше имя"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Пароль"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Повторить пароль"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" size="large" htmlType="submit">Зарегистрироваться</Button>
                    </Form.Item>
                    <Link className="auth__register-link" to="/register">Войти в аккаунт</Link>
                </Form> :
                <div className="auth__success-block">
                    <InfoCircleTwoTone style={{fontSize: "50px"}} />
                    <h3>Подтвердите свой аккаунт</h3>
                    <p>На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
                </div>
                }
            </Block>
        </>
    );
};

export default RegisterForm;