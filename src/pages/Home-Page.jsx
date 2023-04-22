import '../styles/pages/homepage.css'
import caros from '../assets/images/caros-3.jpeg'
import caros1 from '../assets/images/caros-7.jpeg'
import caros2 from '../assets/images/caros-6.jpeg'

const HomePage = () => {
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
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Disabled</a>
      </li>
      <li class="nav-item">
      <button className='app-btn'>Get Appointment</button>
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


        </div>
    );
}

export default HomePage;
