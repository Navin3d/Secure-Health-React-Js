import '../../styles/pages/Patientprofile.css'
import pat_profle from '../../assets/images/profile.jpg'
const PatientProfile = () => {
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
                                    <h4 className='patient_prof_name'>John Adam</h4>
                                    <p className='patient_prof_prblm'>Allergy</p>
                                    <div className="row">
                                        <div className="col">
                                            <h6 className='det'>DOB</h6>
                                            <p id='det_ans'>03/03/1909</p>
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
                            <p className='med'>06/06/2023</p>
                            <p className='med1'> We've all heard the horror stories about hospital risks after surgery. There's the danger of medical complications, like bleeding or infection. Then there are the human errors, like getting the wrong drug or dosage. "Even though you've got a lot of well-trained people in a hospital working very hard, they're still people," says Fran Griffin, RRT, MPA, a director at the Institute for Healthcare Improvement in Cambridge, Mass. "And people sometimes make mistakes."</p>
                        </div>
                        <div id="Pat_pers_background1" className="col">
                            <h5 id='curr_med'>
                                 Lab results
                            </h5>
                            <hr />
                            <div className="row">
                            <div className="col">
                            <p className='med1'><i id='note' class="fa-solid fa-note-sticky"></i> x_ray </p>
                            </div>
                            <div className="col">
                            <p className='med1'>06/06/2023</p>
                            </div>
                            <div className="col">
                            <p className='med1'>John adam</p>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col">
                            <p className='med1'><i id='note' class="fa-solid fa-note-sticky"></i> x_ray </p>
                            </div>
                            <div className="col">
                            <p className='med1'>06/06/2023</p>
                            </div>
                            <div className="col">
                            <p className='med1'>John adam</p>
                            </div>
                            </div>

                            
                        </div>
                    </div>
                    <div className="down"></div>
                </div>
        </div>
    );
}

export default PatientProfile;
