// import App_Img from '../../assets/images/profile.jpg';
import '../../styles/pages/Appointmentlist.css'
const AppoinmentList = () => {
    return (
        <div>
            <div className="content-title">
            <h2>You'r Appointments</h2>
            <p>---------------------</p>
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
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                    </tr>

                 </table>
                </div>
            </div>
        </div>
    );
}

export default AppoinmentList;
