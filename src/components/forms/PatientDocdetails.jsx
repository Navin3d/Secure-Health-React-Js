import React from 'react'
import '../../styles/components/Patientdoc.css';
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

                            <div id="personal-details" className="row">
                               <h5>PERSONAL  <span className='personal-details-color'>DETAILS</span></h5>
                            </div>

                            <div className="row">
                                <div className="col" id='pat_per_details'>
                                    <img id='Pat_img' src={pat_profle} alt="loga" />
                                    <h4 className='patient_prof_name'>loga</h4>
                                    <p className='patient_prof_prblm'>Allergy</p>
                                    <div className="row">
                                        <div className="col">
                                            <h6 className='det'>DOB</h6>
                                            <p id='det_ans'>29-05-2003</p>
                                            <h6 className='det'>Weight</h6>
                                            <p id='det_ans'>168 lb</p>
                                            <h6 className='det'>Blood group</h6>
                                            <p id='det_ans'>O+ve</p>
                                        </div>
                                        <div id='push-right-content' className="col">
                                            <h6 className='det'>Age</h6>
                                            <p id='det_ans'> 22yr 12mon</p>
                                            <h6 className='det'>Height</h6>
                                            <p id='det_ans'>173cm</p>    
                                            <h6 className='det'>HIV</h6>
                                            <p id='det_ans'>negative</p>                                        
                                        </div>
                                    </div>
                                </div>
                                <div id='push-left-content' className="col">
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
                                <div className="col"></div>
                            </div>
                            <div className="buttttttton">
                                <button className='usr_snd_btn' onClick={showsecondverificationformonclick} >Click on futher details </button>
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