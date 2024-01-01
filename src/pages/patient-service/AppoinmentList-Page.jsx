// import App_Img from '../../assets/images/profile.jpg';
import '../../styles/pages/Appointmentlist.css'
import Appointmentdetail from '../patient-service/AppoinmentDetail-Page'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
const AppoinmentList = () => {
    const navigate = useNavigate();
    let [appoinments, setAppoinments] = useState([]);
    const getAllAppoinments = async () => {
        let headers = { "Authorization": localStorage.getItem("Authorization") };
        let userId = localStorage.getItem("UserId");
        userId = userId.slice(4, userId.length)
        console.log(headers);

        const res = await axios.get(`http://localhost:8080/appoinment/get/${userId[1]}`, { headers });
        // console.log(res.data)
        const data = res.data;
        if (res.status == 200) {
            appoinments = data;
            setAppoinments([...appoinments]);
        }
        console.log(appoinments);
    }
    useEffect(() => {
        if(!localStorage.getItem("UserId")){
            navigate('/login');
        }
        getAllAppoinments();
        
    }, [])
    return (
        <div>
            <div className="app_list_title">
                <div className="row">
                    <div className="col-md-7">
                        <h6>
                            Appoinments
                        </h6>
                    </div>
                    <div className="col-md-3" id='media_move'>
                        <label className='fil_lab' htmlFor="">Filter</label>
                        <input className='Filter_box' type="text" placeholder='search' />
                    </div>
                    <div id='media_move' className="col-md-2">
                        <div class="dropdown">
                            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                SortBy
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Date</a>
                                <a class="dropdown-item" href="#">A-Z</a>
                                <a class="dropdown-item" href="#">Z-A</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            {/* Pending Appoinments */}
            <div className="container">
                <div className="pen_app">
                    <p>Pending Appointments</p>
                </div>
                <div className="row">
                    <table>
                        <tr className='table_row_head' >
                            <th>#</th>
                            <th>Appointment_type</th>
                            <th>Due date</th>
                            <th>Due Time</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>View details</th>
                        </tr>

                        {
                            appoinments.map(app => (
                                <tr>
                                    <td>{ app.id }</td>
                                    <td>{ app.summary }</td>
                                    <td>{ app.appoinmentDate }</td>
                                    <td>{ app.appoinmentTime }</td>
                                    <td>udhayar block</td>
                                    <td>{ app.appoinmentStatus }</td>
                                    <td><Appointmentdetail></Appointmentdetail></td>
                                </tr>
                            ))
                        }

                    </table>
                </div>
            </div>

            {/* sidenav */}



            {/* previous appoinments */}
            <div className="content-title"></div>

            <div className="container">
                <div className="pen_app">
                    <p>Previous Appoinments</p>
                </div>
                <div className="row">
                    <table>
                        <tr className='table_row_head' >
                            <th>#</th>
                            <th>Appointment_type</th>
                            <th>Due date</th>
                            <th>Due Time</th>
                            <th>Location</th>
                            <th>Doctor name</th>
                            <th>View details</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Viral Fever</td>
                            <td>12-05-23</td>
                            <td>09:00</td>
                            <td>udhayar block</td>
                            <td><a href="/doctor/:did">Dr.j.priya</a></td>
                            <td><Appointmentdetail></Appointmentdetail></td>

                        </tr>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default AppoinmentList;
