import React from 'react'
import '../../styles/components/Patientdoc.css';
import '../../styles/pages/Doctorpatientauth.css'
import pat_profle from '../../assets/images/profile.jpg'
import { useState } from 'react';

const PatientDocdetails = () => {
    const [showpatdetails , setshowpatdetails]= useState(true);
    const [showsecondverificationform , setshowsecondverificationform] = useState(false);

    const showsecondverificationformonclick = () =>{
        setshowpatdetails(false);
        setshowsecondverificationform(true);
    }

    //Form password log

    const [password , setpassword ] = useState('');
    const handlepassword = (e)=>{
        const passvalue = e.target.value;
        setpassword(passvalue);
    } 

    const showpassword = () =>{
        console.log('password ', password );
    }
  return (
    <div>
        {(showpatdetails && 
        <div className="show-details">
    <div className="row">
                        <h4 className='Pat_prof_title'>PATIENT OVERVIEW </h4>
                    </div>
                    <div className="row">
                        
                        <div id="Pat_pers_background" className="col">
                            {/* left side box */}
                            <div className="row">
                                <div className="col" id='pat_per_details'>
                                    <img className='Pat_img'id='patprofimg' src={pat_profle} alt="loga" />
                                    <h4 className='patient_prof_name'>Loga</h4>
                                    <p className='patient_prof_prblm'>Allergy</p>
                                    <div className="row">
                                        <div className="col">
                                            <h6 className='det'>DOB</h6>
                                            <p id='det_ans'>290503</p>
                                            <h6 className='det'>Weight</h6>
                                            <p id='det_ans'>168 lb</p>
                                            <h6 className='det'>Blood group</h6>
                                            <p id='det_ans'>O+ve</p>
                                        </div>
                                        <div className="col">
                                            <h6 className='det'>Age</h6>
                                            <p id='det_ans'> 22yr 12mon</p>
                                            <h6 className='det'>Height</h6>
                                            <p id='det_ans'>173cm</p>    
                                            <h6 className='det'>HIV</h6>
                                            <p id='det_ans'>negative</p>                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                <h6 className='det1'>HomeAddress</h6>
                                <p id='det_ans1'> 123, Boardway, Newyork ,600122</p>
                                <h6 className=' det1'>Mobile phone number-#</h6>
                                <p id='det_ans1'>(+91) 7305459900</p>
                                <h6 className=' det1'>Home phone-#</h6>
                                <p id='det_ans1'> (+91) 9790778113</p>
                                <h6 className=' det1'>Work phone-#</h6>
                                <p id='det_ans1'> (+91) 9790778113</p>
                                <h6 className='det1'>Email-#</h6>
                                <p id='det_ans1'> Smlogasubramani@gmail.com</p>                                    
                                </div>
                            </div>
                            <div className="buttttttton">
                              <button className='usr_snd_btn' onClick={showsecondverificationformonclick} >Click on futher details</button>  
                            </div>
                        </div>
                        {/* <div className="col">
                            <div  id="Pat_pers_background1"  className="row">
                                <div className="col">
                                    <h5 id='curr_med'>
                                         Medication
                                    </h5>
                                    <hr />
                                    <p className='med'><i  class="fa-solid fa-capsules"></i>  clapal</p>
                                    <p className='med'><i  class="fa-solid fa-capsules"></i>  citrize</p>
                                    <p className='med'><i  class="fa-solid fa-capsules"></i>  Boreyad</p>
                                    <p className='med'><i  class="fa-solid fa-capsules"></i>  electrol</p>
                                </div>
                                <div className="col">
                                    <h5 id='curr_med' >
                                        Duration
                                    </h5>
                                    <hr />
                                    <p className='med'>6 months</p>
                                    <p className='med'>3 days</p>
                                    <p className='med'>9 days</p>
                                    <p className='med'>4 weeks</p>
                                </div>
                            </div>
                            <div className="up"></div>
                            <div id="Pat_pers_background1" className="row">
                                    <h5 id='curr_med' >
                                        Vitals
                                    </h5>
                                    <hr />
                                    <div className="col">
                                        <div className="bld_pls">
                                            <i id="loga" class="fa-regular fa-heart"></i>
                                            <p className='med'>Blood Pressure</p>
                                            <p className='med'> 121/75</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="bld_pls">
                                        <i id="loga" class="fa-sharp fa-solid fa-heart-pulse"></i>
                                                <p className='med'>Heart Pulse</p>
                                                <p className='med'>67 <span id='BPM'>BPM</span></p>
                                        </div>
                                    </div>
                            </div>  
                        </div> */}
                    </div>

                                        
        </div>)}
        
        {( showsecondverificationform &&
            <div className="row">
            <div className="verification-box">
            <div className="row">
                <h2 className='auth-head'>
                    Secure <span className='partition-auth-head'>Health</span>
                </h2>
                <h5 className='verification-subtext'>Two factor Auth</h5>   
                <p className='auth-subtext'> 
                    To help keep your account safe, Secure Health wants to make sure its really you trying to access the records
                </p>
                <p id='learn-more'> 
                    Learn More
                </p>
            </div>
                <label className='input-biometric-label'>Enter your password here!</label>
                <input className='input-auth-biometric' type="number" value={password} onChange={handlepassword} />
                <button id='btn-auth-biometric' className='btn btn-success'> <a onClick={showpassword} href="/patient/profile">SUBMIT</a></button>
            </div>
            </div>
        )}
    </div>
  )
}

export default PatientDocdetails