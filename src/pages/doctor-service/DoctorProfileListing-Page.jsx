import '../../styles/pages/Doctorprofilelistingpage.css'
import Currenttime from './Currenttime';
import docphoto from '../../assets/images/profile.jpg'
const DoctorProfileListing = () => {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                    <h5 className="Pat_prof_title1">
                        Doctors Profiles
                    </h5>
                    <p className='chs_doc'>~Choose your doctor for your betterment!</p>
                    </div>
                    <div className="col-md-3">
                        <div className='time'><Currenttime></Currenttime></div>
                    </div>
                </div>
                <hr />
                <div className="up"></div>
                {/* Listing profile Head */}
                <div className="row">
                    <h5 className='Spl_head'>
                        Opthamology
                    </h5>
                </div>
                {/* Listing profiles */}
                <div className="row">
                    <div id="doc_lst_bck" className="col">
                        <div className="row">
                            <div className="col-md-6">
                                <h5 className="doc_name">Dr.Priyah jagatheeswaran</h5>
                                <div className="row">
                                    <div className="col">
                                        <button className='view_btn'><a href='/doctor/:did'>view</a></button>
                                    </div>    
                                    <div className="col">
                                        <button className='book_btn'><a href='/appoinment/book'>Book</a></button>
                                    </div> 
                                </div>
                            </div>
                            <div className="col-md-3">
                            <p className="doc_spec">Opthamology</p>
                                <p className="doc_spec">30yrs 11mon</p>
                            </div>  
                            <div className="col-md-3">
                                <img id='doc_photo' src={docphoto} alt=""/>    
                            </div>                         
                        </div>
                    </div>
                    <div id="doc_lst_bck" className="col-md-6">
                        <div className="row">
                            <div className="col">
                                <h5 className="doc_name">Dr.vijayalakshmi deshmuk</h5>
                                <div className="row">
                                    <div className="col">
                                    <button className='view_btn'><a href='/doctor/:did'>view</a></button>
                                    </div>    
                                    <div className="col">
                                    <button className='book_btn'><a href='/appoinment/book'>Book</a></button>
                                    </div> 
                                </div>
                            </div>
                            <div className="col-md-3">
                            <p className="doc_spec">Opthamology</p>
                                <p className="doc_spec">25yrs 4mon</p>
                            </div>
                            <div className="col-md-3">
                            <img id='doc_photo' src={docphoto} alt=""/> 
                            </div>                             
                        </div>
                    </div>
                </div>
                <div className="up"></div>
                {/* Listing profile Head */}
                <div className="row">
                    <h5 className='Spl_head'>
                        Radiology
                    </h5>
                </div>
               {/* Listing profiles */}
               <div className="row">
                    <div id="doc_lst_bck" className="col">
                        <div className="row">
                            <div className="col-md-6">
                                <h5 className="doc_name">Dr.Priyah jagatheeswaran</h5>
                                <div className="row">
                                    <div className="col">
                                        <button className='view_btn'><a href='/doctor/:did'>view</a></button>
                                    </div>    
                                    <div className="col">
                                        <button className='book_btn'><a href='/appoinment/book'>Book</a></button>
                                    </div> 
                                </div>
                            </div>
                            <div className="col-md-3">
                            <p className="doc_spec">Radiology</p>
                                <p className="doc_spec">30yrs 11mon</p>
                            </div>  
                            <div className="col-md-3">
                                <img id='doc_photo' src={docphoto} alt=""/>    
                            </div>                         
                        </div>
                    </div>
                    <div id="doc_lst_bck" className="col-md-6">
                        <div className="row">
                            <div className="col">
                                <h5 className="doc_name">Dr.vijayalakshmi deshmuk</h5>
                                <div className="row">
                                    <div className="col">
                                    <button className='view_btn'><a href='/doctor/:did'>view</a></button>
                                    </div>    
                                    <div className="col">
                                    <button className='book_btn'><a href='/appoinment/book'>Book</a></button>
                                    </div> 
                                </div>
                            </div>
                            <div className="col-md-3">
                            <p className="doc_spec">Radiology</p>
                                <p className="doc_spec">25yrs 4mon</p>
                            </div>
                            <div className="col-md-3">
                            <img id='doc_photo' src={docphoto} alt=""/> 
                            </div>                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorProfileListing;
