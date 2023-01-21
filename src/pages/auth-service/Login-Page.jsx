import jwt_decode from "jwt-decode";

import { Container, Row, Col } from "react-bootstrap";

import LoginForm from "../../components/forms/Login.form.component";

import LoginImg from "../../assets/images/Login.png";
import "../../styles/pages/Login.page.css";


const LoginPage = () => {
    return (
        <div className="login-page">
            <Row>
                <Col>
                    <Container>
                        <Row>
                            <Col sm={2}></Col>
                            <Col sm={8} className="form-area">
                                <h4>Dive in!</h4><br />
                                <LoginForm />
                            </Col>
                            <Col sm={2}></Col>
                        </Row>
                    </Container>
                </Col>
                <Col>
                    <img className="login-img" src={LoginImg} alt="login" />
                </Col>
            </Row>
        </div>
    );
}

export default LoginPage;
