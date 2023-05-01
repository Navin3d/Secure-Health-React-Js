import '../../styles/pages/Bookappointment.css'
import BookAppoinmentfunc from '../patient-service/BookAppoinmentfunc'
// import book from '../../assets/images/bookappointment.png'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const INITIAL_USER = {
    "summary": "",
    "description": "",
    "appoinmentTime": "",
    "appoinmentDate": "",
    "doctorid": "",
    "patientId": ""
}
const BookAppoinment = () => {
    const navigate = useNavigate();
    const [requestBody, setRequestBody] = useState(INITIAL_USER);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRequestBody((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const headers = { "Authorization": localStorage.getItem("Authorization") };
        requestBody.patientId = localStorage.getItem("UserId").slice(4, localStorage.getItem("UserId").length);
        setRequestBody(requestBody);
        console.log(requestBody);
        const res = await axios.post("http://localhost:8080/appoinment", requestBody, { headers });
        if (res.status == 200) {
            navigate("/appoinment/list");
        }
    }
    return (
        <div>
            <div className="content-title">
                <h4>Book your Appoinment</h4>
                <p>---------------------</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2" ></div>
                    <div className="col-md-8" id="box">
                        <div className="row">
                            <div className="col">
                                <form onSubmit={handleSubmit}>
                                    <input className='ip_text' type="text" placeholder='Summary' id="fname1" onChange={handleChange} name="summary" value={requestBody.summary} />
                                    <input className='ip_text' type="text" placeholder='Description' id="fname1" onChange={handleChange} name="description" value={requestBody.description} />
                                    <input className='ip_text' type="text" placeholder='Appointment time' id="fname1" onChange={handleChange} name="appoinmentTime" value={requestBody.appoinmentTime} />
                                    <input className='ip_text' type="text" placeholder='Appointment date' id="fname1" onChange={handleChange} name="appoinmentDate" value={requestBody.appoinmentDate} />
                                    <input className='ip_text' type="text" placeholder='Doctor Id' id="fname1" onChange={handleChange} name="doctorid" value={requestBody.doctorid} />
                                    <button className='bookbtn' type='submit'>Book Now</button>
                                </form>
                            </div>
                            {/* <div className="col">
                                <label className='ip_text1' htmlFor="">Summary</label>
                                <textarea id='fname2' placeholder='Type here ....' ></textarea>
                                <BookAppoinmentfunc></BookAppoinmentfunc>
                            </div> */}
                            <div className="col">
                                <img className='image1' src="https://img.freepik.com/free-vector/doctor-examining-patient-clinic-illustrated_23-2148856559.jpg?w=1060&t=st=1674728590~exp=1674729190~hmac=da4935b4d2d07247f036e51709501a145e63a4aab93c5595b92f0249c7f4c34d" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2" ></div>
                </div>
            </div>
        </div>
    );
}

export default BookAppoinment;
