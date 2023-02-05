import '../../styles/pages/Bookappointment.css'
import BookAppoinmentfunc from '../patient-service/BookAppoinmentfunc'
// import book from '../../assets/images/bookappointment.png'
const BookAppoinment = () => {
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
                            <input className='ip_text' type="text" placeholder='Summary'id="fname1"/>
                            <input className='ip_text' type="text" placeholder='Description'id="fname1"/>
                            <input className='ip_text' type="date" placeholder='Appointment time'id="fname1"/>
                            <input className='ip_text' type="date" placeholder='Appointment date'id="fname1"/>
                            <button className='bookbtn'>Book Now</button>
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
