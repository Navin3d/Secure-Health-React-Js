import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useCookies } from "react-cookie";
import axios from "axios";
import { BASE_URL } from "../../utils/config";

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Checkbox, Form, Input } from 'antd';


const INITIAL_DATA = {
    isWrong: false,
    error: ""
};

const LoginForm = () => {

    const navigate = useNavigate();
    const [cookies, setCookies] = useCookies(["Authorization", "Is_Doctor", "User_Id", "Refresh_Token", "Logged-In"]);
    const [formValidationData, setValidationData] = useState(INITIAL_DATA);

    const onFinish = (values) => {
        delete values.remember;
        console.log('Received values of form: ', values);
        axios.post(`${BASE_URL}/auth/login`, values).then((response) => {
            console.log("res==", response);
            const authorization = response.headers.authorization;
            const refreshToken = response.headers.refresh_token;
            const auth = authorization.split(" ")[1];
            const decodedData = jwt_decode(auth);
            console.log(decodedData.sub);
            setCookies("Authorization", authorization);
            localStorage.setItem("Authorization", authorization);
            setCookies("Refresh_Token", refreshToken);
            auth.includes("PAT-") ? (
                // setCookies("Patient_Id", decodedData.sub),
                localStorage.setItem("UserId", decodedData.sub)
            ) : (
                // setCookies("Doctor_Id", decodedData.sub),
                localStorage.setItem("UserId", decodedData.sub)
            );
            setCookies("Logged-In", true);
            navigate("/")
        }).catch((e) => {
            e.response.status == 401 && setValidationData(prev => ({ ...prev, isWrong: true, error: "Incorrect username or password..." }));
        });
    };

    return (
        <div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="userName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                    validateStatus={formValidationData.isWrong && "error"}
                    hasFeedback={formValidationData.isWrong}
                    help={formValidationData.error}
                >
                    <Input
                        className="form-input"
                        prefix={<UserOutlined
                            className="site-form-item-icon" />}
                        placeholder="Username"
                        onChange={() => setValidationData(INITIAL_DATA)}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                    validateStatus={formValidationData.isWrong && "error"}
                    hasFeedback={formValidationData.isWrong}
                    help={formValidationData.error}
                >
                    <Input
                        className="form-input"
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        onChange={() => setValidationData(INITIAL_DATA)}
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot login-forgot-password" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <button type="primary" htmlType="submit" className="btn btn-outline-success login-sumit">
                        Log in
                    </button> <br />
                    <a className='login-forgot-password' href="/signup">register now!</a>
                </Form.Item>
            </Form>
        </div>
    );
}

export default LoginForm;
