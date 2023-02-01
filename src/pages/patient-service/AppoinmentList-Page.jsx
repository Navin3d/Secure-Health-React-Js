// import App_Img from '../../assets/images/profile.jpg';
import '../../styles/pages/Appointmentlist.css'
const AppoinmentList = () => {
    return (
        <div>
            <div className="content-title">
                
            </div>

{/* Pending Appoinments */}
            <div className="container">
                <div className="pen_app">
                    <p>Pending Appointments</p>
                    <p>------------------</p>
                </div>
                <div className="row">    
                <table>
                    <tr>
                       <th>Appointment_type</th>
                       <th>Due date</th>
                       <th>Due Time</th>
                       <th>Location</th>
                       <th>Doctor name</th>
                    </tr>
                    <tr>
                       <td>Viral Fever</td>
                       <td>12-05-23</td>
                       <td>09:00</td>
                       <td>udhayar block</td>
                       <td>Dr.j.priya</td>
                    </tr>

                 </table>
                </div>
            </div>

{/* previous appoinments */}
        <div className="content-title"></div>

            <div className="container">
                <div className="pen_app">
                    <p>Previous Appoinments</p>
                    <p>------------------</p>
                </div>
                <div className="row">    
                <table>
                    <tr>
                       <th>Appointment_type</th>
                       <th>Due date</th>
                       <th>Due Time</th>
                       <th>Location</th>
                       <th>Doctor name</th>
                    </tr>
                    <tr>
                       <td>Viral Fever</td>
                       <td>12-05-23</td>
                       <td>09:00</td>
                       <td>udhayar block</td>
                       <td>Dr.j.priya</td>
                    </tr>

                 </table>
                </div>
            </div>
        </div>
    );
}

export default AppoinmentList;
