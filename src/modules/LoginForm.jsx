import React from 'react';
import {Form, Input} from "antd";
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

import {Block, Button} from "../components";


const LoginForm = () => {
    return (
        <>
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <Block>
                <Form
                    me="normal_login"
                    className="login-form"
                    initialValues={{remember: true}}

                >
                    <Form.Item
                        name="email"
                        rules={[{required: true, message: 'Please input your Username!'}]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="E-Mail"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{required: true, message: 'Please input your Password!'}]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Пароль"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" size="large" htmlType="submit">Войти в аккаунт</Button>
                    </Form.Item>
                    <Link className="auth__register-link" to="/register">Зарегистрироваться</Link>
                </Form>
            </Block>
        </>
    );
};

export default LoginForm;