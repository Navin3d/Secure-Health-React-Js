// import App_Img from '../../assets/images/profile.jpg';
import '../../styles/pages/Appointmentlist.css'
import Appointmentdetail from '../patient-service/AppoinmentDetail-Page'
const AppoinmentList = () => {
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
                          <div  class="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
                       <th>Doctor name</th>
                       <th>Status</th>
                       <th>View details</th>
                    </tr>
                    <tr>
                        <td>1</td>
                       <td>Viral Fever</td>
                       <td>12-05-23</td>
                       <td>09:00</td>
                       <td>udhayar block</td>
                       <td><a href="/doctor/:did">Dr.j.priya</a></td>
                       <td>confirmed</td>
                       <td><Appointmentdetail></Appointmentdetail></td>
                    </tr>
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
