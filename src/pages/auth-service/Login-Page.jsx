import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import LoginForm from "../../components/forms/Login.form.component";

import LoginImg from "../../assets/images/Login.png";
import "../../styles/pages/Login.page.css";
import { useEffect } from "react";
import { isLoggedIn } from "../../services/auth.service";


const LoginPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        isLoggedIn() && navigate("/");
    });
    return (
        <div className="login-page">
            <Container>
                <Row>
                    <Col>
                        {/* <Container> */}
                        {/* <Row> */}
                        {/* <Col sm={2}></Col> */}
                        {/* <Col sm={8} className="form-area"> */}
                        <div className="form-area">
                            <h4>Dive in!</h4><br />
                            <LoginForm />
                        </div>
                        {/* </Col> */}
                        {/* <Col sm={2}></Col> */}
                        {/* </Row> */}
                        {/* </Container> */}

                    </Col>
                    <Col>
                        <div className="image-area">
                            <img className="login-img" src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg" alt="login" />
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default LoginPage;
