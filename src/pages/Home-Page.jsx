import '../styles/pages/homepage.css'
import '../styles/pages/Addmedicalhistory.css'
import caros from '../assets/images/caros-3.jpeg'
import caros1 from '../assets/images/caros-7.jpeg'
import caros2 from '../assets/images/caros-6.jpeg'
import covid from '../assets/images/covid.jpg'
import caros4 from '../assets/images/caros-4.jpeg'
import caros5 from '../assets/images/caros-5.jpeg'
import caros6 from '../assets/images/caros-6.jpeg'
// import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';


const HomePage = () => {
  const [decodedData, setDecodedData] = useState(null);
  
  useEffect(() => {
    const userId = localStorage.getItem('UserId');
    if (userId.includes("PAT")) {
      setDecodedData(userId);
      console.log("true");
    } else {
      console.log('false');
    }
  }, []);


    return (
  <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><span className='head-colo'>Secure</span>Health</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item ">
        {decodedData && decodedData.includes("PAT")?null:(<a class="nav-link"  href="/doctor/list">Doctor <span class="sr-only">(current)</span></a>)}
      </li>
      <li class="nav-item">
      {decodedData && decodedData.includes("DOC")?null:(<a class="nav-link"  href="/doctor/list">Diagnose <span class="sr-only">(current)</span></a>)}
      </li>
      <li class="nav-item">
      {decodedData && decodedData.includes("DOC")?null:(<a class="nav-link"  href="/doctor/list">Labtest <span class="sr-only">(current)</span></a>)}
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/patient/profile">profile</a>
      </li>
      <li class="nav-item">
      {decodedData && decodedData.includes("DOC")?null:(<button className='app-btn'><a href="/appoinment/book">Get Appointment</a></button>)}
      </li>
    </ul>
  </div>
</nav>               


  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      {/* chatgpt */}
    <div className="image-container">
      <img src={caros} alt="Example" />
      <div className="text-container">
        <h2 className='in-texxt'>We provide<span className='head-colo-1'>Medical</span> services <br/> that you can <span className='head-colo-1'>Trust!</span> </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, neque!.</p>
        <button>Get Appointment</button>
      </div>
    </div>
      {/* chatgpt */}
    </div>
    <div class="carousel-item">
    <div className="image-container">
      <img src={caros1} alt="Example" />
      <div className="text-container">
        <h2 className='in-texxt'>We provide<span className='head-colo-1'>Medical</span> services <br/> that you can <span className='head-colo-1'>Trust!</span> </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, neque!.</p>
        <button>Get Appointment</button>
      </div>
    </div>
    </div>
    <div class="carousel-item">
    <div className="image-container">
      <img src={caros2} alt="Example" />
      <div className="text-container">
        <h2 className='in-texxt'>We provide<span className='head-colo-1'>Medical</span> services <br/> that you can <span className='head-colo-1'>Trust!</span> </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, neque!.</p>
        <button>Get Appointment</button>
      </div>
    </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>
  <div className="container">

    <div className="row">
      <div className="caro-down-txt">
        <h2>We Are Always Ready To Help You & <br/> Your Family</h2>
        <p><i class="fa-sharp fa-solid fa-bed-pulse"></i></p>
        <h6>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</h6>
      </div>
      
    </div>
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col">
        <div className="emg-bx">
          <h2 className='emg-cnt'>Emergency cases</h2>  
          <p className='emg-cnt-P'>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
          <a href="">
          <p className='emg-cnt-P'>LEARN MORE   <i id="icon"class="fa-solid fa-arrow-right"></i></p>
          </a>
        </div>
      </div>
      <div className="col">
      <div className="emg-bx">
          <h2 className='emg-cnt'>Doctors Timetable</h2>  
          <p className='emg-cnt-P'>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
          <a href="">
          <p className='emg-cnt-P'>LEARN MORE   <i id="icon"class="fa-solid fa-arrow-right"></i></p>
          </a>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div className="col">
      <div className="emg-bx">
          <h2 className='emg-cnt'>Opening Hours</h2>  
          <p className='emg-cnt-P'>Monday - Friday  8.00-20.00<br/>Saturday   9.00-18.30<br/>Monday - Thusday   9.00-15.0</p>
          <a href="">
          <p className='emg-cnt-P'>LEARN MORE   <i id="icon"class="fa-solid fa-arrow-right"></i></p>
          </a>
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
    </div>
    <div className="section-top"></div>
      <div className="row">
      <div className="image-container1">
      <img src={covid} alt="Your image" />
      <div className="content">
       <h1>Do you need Emergency Medical <br/> Care? Call @ 9790778113</h1>
       <div className="home-top"></div>
      <p>Empowering patients with reliable and accessible healthcare information to make informed decisions.</p>
      </div>
    </div>
      </div>

      <div className="home-top"></div>
    <div className="row">
      <div className="caro-down-txt">
        <h2>We Offer Different Services<br/> To Improve Your Health</h2>
        <p><i class="fa-sharp fa-solid fa-bed-pulse"></i></p>
        <h6>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</h6>
      </div>
      
    </div>
    <div className="home-top"></div>
    <div className="row">
      <div className="home-box">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <img className='footup-img' src={caros4} alt="" />
          </div>
          <div className="col">
          <img  className='footup-img' src={caros5} alt="" />
          </div>
          <div className="col">
          <img  className='footup-img' src={caros6} alt="" />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
    <div className="home-top"></div>

    <div className="footer-background">
        <footer>
            <div class="row">
              <div className="col-md-1"></div>

                <div class="col">
                  <div className="addmed-top"></div>
                    <h5>Follow us on :</h5><br/>
                    <a href="https://www.linkedin.com/in/smnavindurai/"><span>
                            <i class="fa-brands fa-linkedin"></i>
                            </span>&nbsp;{' '}Linked-In.</a><br/><br/>
                    <a href="https://github.com/Navin3d"><span>
                    <i class="fa-brands fa-github"></i> 
                            </span>&nbsp;{' '}Github.</a><br/><br/><br/><br/>
                </div>
                <div class="col">
                <div className="addmed-top"></div>
                    <h5>Connect with us on :</h5><br/>
                    <a href="https://www.instagram.com/mr_navin.s.m/"><span>
                    <i class="fa-brands fa-instagram"></i>
                            </span>&nbsp;{' '} Instagram.</a><br/><br/>
                    <a href="https://twitter.com/S_M_Navin_Durai"><span>
                        <i class="fa-brands fa-twitter"></i>
                            </span>&nbsp;{' '} Twitter.</a><br/><br/>
                    <a href="https://www.facebook.com/"><span>
                    <i class="fa-brands fa-facebook"></i>
                            </span>&nbsp;{' '} Facebook.</a><br/><br/>

                </div>
          
                    <div className='col '>
                    <div className="addmed-top"></div>
                        <div className='contact-item'>
                        <h5>Contact Info</h5><br/>
                        <p>
                            <span>
                            <i className='fa fa-phone'></i>&nbsp; Address
                            </span>{' '}
                            Chennai
                        </p>
                        </div>
                        <div className="addmed-top"></div>
                        <div className='contact-item'>
                        <p>
                            <span>
                            <i className='fa fa-phone'></i>&nbsp; Phone
                            </span>{' '}
                            9790778113
                        </p>
                        </div>
                        {/* <div className='contact-item'>
                        <p>
                            <span>
                            <i className='fa fa-envelope-o'></i>&nbsp; Email
                            </span>{' '}
                            info.securehealth@gmail.com
                        </p>
                        </div> */}
                </div>
                <div className="col-md-1"></div>
            </div>
        </footer>  
        </div>


    

  </div>
    );
}

export default HomePage;
