import '../../styles/pages/Doctorprofilelistingpage.css'
import Currenttime from './Currenttime';
import docphoto from '../../assets/images/profile.jpg'
import axios from 'axios';
import { useEffect, useState } from 'react';

const INIT_DATA = [
    {
        "id": "c50e066e-9950-49fd-879d-f67b0a36d571",
        "ranking": "1",
        "firstName": "Ajith",
        "lastName": "Ram",
        "mobileNumber": "+917708827461",
        "email": "drpajithram@gmail.com",
        "registrationId": "DOC-000000001",
        "yearsOfExperience": 1,
        "dateOfBirth": "1994-09-12",
        "qualifications": [
            {
                "id": "88843a24-d2eb-4e53-93fe-ce54908f864c",
                "title": "MBBS",
                "specialization": "General Medicine",
                "description": "Bachelor of Medicine and Bachelor of Surgery",
                "diseasesTreatable": [
                    {
                        "id": "055d0644-7eac-45ff-8215-4cc78a3db7f2",
                        "title": "Common Cold",
                        "description": "The common cold is an infection of your nose and throat.",
                        "detailedDescription": "More than 200 different viruses can cause colds. There’s no cure for a common cold, but it typically runs its course in a week to 10 days.",
                        "diseaseType": "GENERALMEDICINE"
                    },
                    {
                        "id": "50d40bbb-2def-4b68-8b06-3a69bb6f9cdd",
                        "title": "Coronavirus",
                        "description": "COVID-19 is caused by the SARS-CoV-2 virus",
                        "detailedDescription": "COVID-19 can cause mild to severe respiratory illness, including death. The best preventive measures include getting vaccinated",
                        "diseaseType": "GENERALMEDICINE"
                    }
                ]
            }
        ]
    }
];
const DoctorProfileListing = () => {
    let [doctors, setDoctors] = useState([]);
    const getAllDoctors = async () => {
        let headers = { "Authorization": localStorage.getItem("Authorization") };
        const res = await axios.get("http://localhost:8080/doctor", { headers });
        // console.log(res.data)
        const data = res.data;
        if (res.status == 200) {
            doctors = data;
            setDoctors([...doctors]);
        }
        console.log(doctors);
    }
    useEffect(() => {
        getAllDoctors();
    }, [])
    return (
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
                    {
                        doctors.map(doctor => (
                            <div id="doc_lst_bck" className="col">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5 className="doc_name">{ doctor.firstName } { doctor.lastName }</h5>
                                        <div className="row">
                                            <div className="col">
                                                <button className='view_btn'><a href={`/doctor/${doctor.id}`}>view</a></button>
                                            </div>
                                            <div className="col">
                                                <button className='book_btn'><a href='/appoinment/book'>Book</a></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <p className="doc_spec">{ doctor.qualifications[0].specialization }</p>
                                        <p className="doc_spec">{ doctor.yearsOfExperience }</p>
                                    </div>
                                    <div className="col-md-3">
                                        <img id='doc_photo' src={docphoto} alt="" />
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default DoctorProfileListing;
