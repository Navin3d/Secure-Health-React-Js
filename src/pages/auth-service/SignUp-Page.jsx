
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
                           <img className='image' src="https://img.freepik.com/free-photo/doctor-with-stethoscope-hands-hospital-background_1423-1.jpg?w=1060&t=st=1674720399~exp=1674720999~hmac=0727a68a2687d7e6e9c71d6610d850d417f6768af1a97ddbc6ca4fcfc31ccc3e" alt="" />
                        </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
