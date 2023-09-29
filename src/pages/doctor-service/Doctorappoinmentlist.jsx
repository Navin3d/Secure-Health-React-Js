import {useState} from 'react'
import '../../styles/pages/Doctorappoinmentlist.css';
// import img from '../../assets/images/caros-2.jpeg'
import TimeReschedule from '../../components/mui/TimeReschedule.jsx';

const DOCTOR_DATA ={
    name : "Raja Priyah",
}

const PATIENT_APPOINMENT_DATA =[
    {
    title : "Logasubramani",
    description : "I have a sever apitite problem over the past 3 days and now its been 4th day and still the pain continues.",
    disease : "Stomach pain",
    timing : "5:00pm"
    },
    {
        title : "Navin",
        description : "I have a sever apitite problem over the past 3 days and now its been 4th day and still the pain continues.",
        disease : "Stomach pain",
        timing : "5:00pm"
    },
    {
        title : "Jenish",
        description : "I have a sever apitite problem over the past 3 days and now its been 4th day and still the pain continues.",
        disease : "Stomach pain",
        timing : "5:00pm"
    },
    {
        title : "vicom",
        description : "I have a sever apitite problem over the past 3 days and now its been 4th day and still the pain continues.",
        disease : "Stomach pain",
        timing : "5:00pm"
    },

]


const Doctorappoinmentlist = () => {
    const[patientappoinmentData, setPatientAppoinmentdata] = useState(PATIENT_APPOINMENT_DATA);
    const[doctorname , setdoctorname] = useState(DOCTOR_DATA);

    return (
    <div>

            <div className="row">
            <h2 className='appoinmentlist-head'>
                Appoinment<span id='partition-head'>List</span>
            </h2>
            <p className='appoinment-list-subhead'>
                The patients under your care.
            </p>
            </div>
            <div className="space"></div>
            <div id='fade' className="container">
            <div className="row">
            {/* need to be fetched from the doctor who logs in */}
                <h2 id='partition-doc-name'> Hello! Dr.{doctorname.name}</h2>
                <p className='appoinment-doc-subhead' >Patients in your schedule today!</p> 
            </div>

            <div className="space"></div>
            
            <div className="row">
                {patientappoinmentData.map((patient,index)=>(
                <div className="col">
                <div class="card" >
                    {/* <img class="card-img-top" src={img} alt="Card image cap"/> */}
                    <div class="card-body">
                      <h5 id='card-title' class="card-title">{patient.title}</h5>
                      <p id='card-text' class="card-text">{patient.description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li id="card-subcontents" class="list-group-item"> Admitted for : <span className='card-subcontents'>{patient.disease}</span></li>
                      <li id="card-subcontents"  class="list-group-item">Booked at : <span className='card-subcontents'>{patient.timing}</span></li>
                    </ul>
                    <div class="card-body">
                        <div className="row">
                        <div className="col">
                        <button><a href="#" id="buton-font" class="btn btn-success">ACCEPT</a></button>
                        </div>
                        <div className="col">
                    <a href="#"  id="buton-font"><TimeReschedule/></a>
                      </div>
                      </div>
                    </div>
                </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Doctorappoinmentlist