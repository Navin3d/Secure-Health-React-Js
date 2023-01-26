
import '../../styles/pages/Signup.css'
const SignUpPage = () => {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <h5 class="head-content">Create An Account<br></br><p className='tagline'>At your Quick service </p></h5>
                    
                        <label for="fname" id="label">First name:</label><br></br><input type="text" id="fname" name="fname"/>
                        <br></br>
                        <label for="lname" id="label">Email:</label><br></br><input type="text" id="fname" name="lname"/>
                        <br></br>
                        <label for="lname" id="label">Password:</label><br></br><input type="text" id="fname" name="lname"/>
                        <br></br>
                        <label for="lname" id="label">Confirm Password:</label><br></br><input type="text" id="fname" name="lname"/>
                        <br></br>
                        <label for="lname" id="label">Mobile number:</label><br></br><input type="text" id="fname" name="lname"/>
                        <br></br>
                        <label for="lname" id="label">Address:</label><br></br><input type="text" id="fname" name="lname"/>
                        <div className="row">
                        <button className='registerbutton'>Register</button>
                        </div>

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
