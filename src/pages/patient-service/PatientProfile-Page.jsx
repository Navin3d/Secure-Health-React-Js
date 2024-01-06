import { useState } from 'react';
import '../../styles/pages/Patientprofile.css'
import pat_profle from '../../assets/images/profile.jpg'

const INITIAL_PATIENT = {
    name: "LOGA",
    dob: "2992-11-31" ,
    patprblm : "Allergy",
    weight : "168",
    Bloodtype: "o+ve",
    age: "27",
    height: "173cm",
    hashiv : "NO",
    address : " 123, Boardway, Newyork ,600122",
    phnno: "9790778113",
    hphnno: "9789877999",
    wphnno : "283509424",
    email : "smlogasubramani"
};

const PAT_DETAIL = {
    date : "06-02-23",
    script: "We've all heard the horror stories about hospital risks after surgery. There's the danger of medical complications, like bleeding or infection. Then there are the human errors, like getting the wrong drug or dosage. Even though you've got a lot of well-trained people in a hospital working very hard, they're still people,says Fran Griffin, RRT, MPA, a director at the Institute for Healthcare Improvement in Cambridge, Mass. And people sometimes make mistakes."
}

const REPORT = [
    {xray : "x-ray" , date:"06/06/23" , name:"johnadam"},
    {xray : "x-ray" , date:"06/07/23" , name:"Logasubramani"},
    {xray : "x-ray" , date:"06/08/23" , name:"priya"},
    {xray : "x-ray" , date:"06/09/23" , name:"navin"},
    ];

const MEDICATION = ["clapal" , " citrize" , 'boyad' , 'electrol', 'sinerst' ,'amx500'];
const MED_DAYS = ["30" , "20", "2" ,"14" , "3" ,"4"];


const PatientProfile = () => {
    const [patientData] = useState(INITIAL_PATIENT);
    const[med] = useState(MEDICATION);
    const[duration ] = useState(MED_DAYS);
    const[notes] = useState(PAT_DETAIL);
    const[reportresult] = useState(REPORT);

    return (
        <div>
            {/* starting at 9:30 on 11-02-2023 */}
                <div className="container">
                    <div className="row">
                        <h4 className='Pat_prof_title'>PATIENT OVERVIEW </h4>
                    </div>
                    <div className="row">  
                        <div id="Pat_pers_background" className="col">
                            {/* left side box */}
                            <div className="row">
                                <div className="col" id='pat_per_details'>
                                    <img className='Pat_img' src={pat_profle} alt="loga" />
                                    <h4 className='patient_prof_name'>{ patientData.name }</h4>
                                    <p className='patient_prof_prblm'>{patientData.patprblm}</p>
                                    <div className="row">
                                        <div className="col">
                                            <h6 className='det'>DOB</h6>
                                            <p id='det_ans'>{patientData.dob }</p>
                                            <h6 className='det'>Weight</h6>
                                            <p id='det_ans'>{patientData.weight}lb</p>
                                            <h6 className='det'>Blood group</h6>
                                            <p id='det_ans'>{patientData.Bloodtype}</p>
                                        </div>
                                        <div className="col">
                                            <h6 className='det'>Age</h6>
                                            <p id='det_ans'> {patientData.age}</p>
                                            <h6 className='det'>Height</h6>
                                            <p id='det_ans'>{patientData.height}</p>    
                                            <h6 className='det'>HIV</h6>
                                            <p id='det_ans'>{patientData.hashiv}</p>                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                <h6 className='det1'>HomeAddress</h6>
                                <p id='det_ans1'>{patientData.address}</p>
                                <h6 className=' det1'>Mobile phone number-#</h6>
                                <p id='det_ans1'>(+91){patientData.phnno} </p>
                                <h6 className=' det1'>Home phone-#</h6>
                                <p id='det_ans1'> (+91){patientData.hphnno} </p>
                                <h6 className=' det1'>Work phone-#</h6>
                                <p id='det_ans1'> (+91) {patientData.wphnno}</p>
                                <h6 className='det1'>Email-#</h6>
                                <p id='det_ans1'> {patientData.email}@gmail.com</p>                                    
                                </div>
                            </div>
                            <div className="buttttttton">
                                <button className='usr_snd_btn'><a href='smlogasubramani@gmail.com'>Send Message</a></button>
                            </div>
                        </div>
                        <div className="col">
                            <div  id="Pat_pers_background1"  className="row">
                                
                                <div className="col">
                                    <h5 id='curr_med'>
                                         Medication
                                    </h5>
                                    <hr />
                                    {med.map((i,index)=>( <p className='med' key={index}><i  class="fa-solid fa-capsules"></i>{i}</p>))} 
                                </div>  
                                <div className="col">
                                    <h5 id='curr_med' >
                                        Duration
                                    </h5>
                                    <hr />
                                    {duration.map((j,index)=>(<p key={index}className='med'>{j} days </p>))}
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
                        </div>
                    </div>

                    {/* second row starts(notes and labresult) */}
                    <div className="up"></div>
                    <div className="row">
                        <div id="Pat_pers_background1" className="col">
                            <h5 id='curr_med'>
                                 Notes
                            </h5>
                            <hr />
                        <p className='med'>{notes.date}</p>
                        <p className='med1'>{notes.script}</p>    
                        </div>
                        <div id="Pat_pers_background1" className="col">
                            <h5 id='curr_med'>
                                 Lab results
                            </h5>
                            <hr />
                            {reportresult.map((r,index)=>(
                            <div key={index} className="row">
                            <div  className="col">
                            <p className='med1'><i id='note' class="fa-solid fa-note-sticky"></i> {r.xray} </p>
                            </div>
                            <div className="col">
                            <p className='med1'>{r.date}</p>
                            </div>
                            <div className="col">
                            <p className='med1'>{r.name}</p>
                            </div>
                            </div>))}
                        </div>
                    </div>
                    <div className="down"></div>
                    <div className="row">
                        <div className="col"><button className='add-his-btn'><a href="/addmedhis">Add medical history</a></button></div>
                        <div className="col"><button className='add-his-btn'><a href="/discharge">Discharge</a></button></div>
                        <div className="col"><button className='add-his-btn'><a href="/labtestentry">Lab history</a></button></div>
                    </div>
                    <div className="down"></div>
                </div>
        </div>
    );
}

export default PatientProfile;
