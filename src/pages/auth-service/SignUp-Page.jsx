import '../../styles/pages/Signup.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const INITIAL_USER = {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
    dateOfBirthText: "",
    cpassword: ""
};
const SignUpPage = () => {
    const navigate = useNavigate();
    const [requestBody, setRequestBody] = useState(INITIAL_USER);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRequestBody((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:8080/auth/register/patient", requestBody);
        if (res.status == 201) {
            navigate("/login");
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <h5 class="head-content">Create An Account<br></br><p className='tagline'>At your Quick service </p></h5>

                        <form onSubmit={handleSubmit}>
                            <label for="fname" id="label">First name:</label><br></br><input type="text" id="fname" onChange={handleChange} name="firstName" value={requestBody.firstName} />
                            <br></br>
                            <label for="fname" id="label">Last name:</label><br></br><input type="text" id="fname" onChange={handleChange} name="lastName" value={requestBody.lastName} />
                            <br></br>
                            <label for="lname" id="label">Email:</label><br></br><input type="text" id="fname" onChange={handleChange} name="email" value={requestBody.email} />
                            <br></br>
                            <label for="lname" id="label">Password:</label><br></br><input type="password" id="fname" onChange={handleChange} name="password" value={requestBody.password} />
                            <br></br>
                            <label for="lname" id="label">Confirm Password:</label><br></br><input type="text" id="fname" onChange={handleChange} name="cpassword" value={requestBody.cpassword} />
                            <br></br>
                            <label for="lname" id="label">Mobile number:</label><br></br><input type="text" id="fname" onChange={handleChange} name="mobileNumber" value={requestBody.mobileNumber} />
                            <br></br>
                            <label for="lname" id="label">DOB:</label><br></br><input type="text" id="fname" onChange={handleChange} name="dateOfBirthText" value={requestBody.dateOfBirthText} />
                            <div className="row">
                                <button className='registerbutton' type='submit'>Register</button>
                            </div>
                        </form>
                        
                        <div className="row">
                            <h5 class="login-redirect">Already have a account?<a href="">Login</a></h5>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img className='image' src="https://img.freepik.com/free-photo/fun-3d-cartoon-illustration-indian-doctor_183364-114483.jpg?w=360&t=st=1674722971~exp=1674723571~hmac=d69cc26f40533bd60fbf22d99df7a92fd85189a4421d3237f0784cfe759f1420" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
