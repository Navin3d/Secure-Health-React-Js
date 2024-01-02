import React, { useState } from 'react'
import '../../styles/pages/Doctorpatientauth.css'
import PatientDocdetails from '../../components/forms/PatientDocdetails';

const Doctorpatientauth = () => {

    // GET BIOMETRIC INPUT VALUE

    const [biometricvalue , setbiometricvalue ] = useState(false);
    const handleinput =  (e) =>{
        const newvalue = e.target.value;
        setbiometricvalue(newvalue);
    };

    //FORM and SECTION RENDERING.
    const [ showform ,setshowform] =useState(true);
    const [showdetails , setshowdetails] = useState(false);

    const showformonclick =() =>{
        setshowform(false);
        setshowdetails(true);
        console.log('biometric value' , biometricvalue);
    }

  return (
    <div>
        <div id='whole-page'>
        <div className="container">

            {(showform &&
            <div className="verification-box">
            <div className="row">
                <h2 className='auth-head'>
                    Secure <span className='partition-auth-head'>Health</span>
                </h2>
                <h5 className='verification-subtext'>Verify it's you</h5>   
                <p className='auth-subtext'> 
                    To help keep your account safe, Secure Health wants to make sure its really you trying to access the records
                </p>
                <p id='learn-more'> 
                    Learn More
                </p>
            </div>
                <label className='input-biometric-label'>Place your finger here!</label>
                <input className='input-auth-biometric' type="number" value={biometricvalue} onChange={handleinput} />
                <button id='btn-auth-biometric' onClick={showformonclick} className='btn btn-success'>SUBMIT</button>
            </div>)}


            {(showdetails && 
            <div className="details">
                <PatientDocdetails/>
            </div>
            )}
          
        </div>
    </div>
    </div>
  )
}

export default Doctorpatientauth