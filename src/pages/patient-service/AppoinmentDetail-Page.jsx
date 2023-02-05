import '../../styles/pages/Appointmentdetailpage.css'
import React from 'react';

const styles = {
  body: {
    fontFamily: 'Lato, sans-serif'
  },
  sidenav: {
    height: '100%',
    width: '0',
    position: 'fixed',
    zIndex: '1',
    top: '0',
    left: '0',
    overflowX: 'hidden',
    transition: '0.5s',
    paddingTop: '60px'
  },
  sidenavLink: {
    padding: '8px 8px 8px 32px',
    textDecoration: 'none',
    fontSize: '25px',
    color: '#818181',
    display: 'block',
    transition: '0.3s'
  },
  sidenavLinkHover: {
    color: '#f1f1f1'
  },
  closebtn: {
    position: 'absolute',
    top: '0',
    right: '25px',
    fontSize: '36px',
    marginLeft: '50px'
  }
};

class AppoinmentDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenavOpen: false
    };
  }

  openNav = () => {
    this.setState({ sidenavOpen: true });
  };

  closeNav = () => {
    this.setState({ sidenavOpen: false });
  };

  render() {
    return (
      <div style={styles.body}>
        <div
          id="mySidenav"
          style={{
            ...styles.sidenav,
            width: this.state.sidenavOpen ? '390px' : '0'
          }}
        >
          <a
            href="#"
            onClick={this.closeNav}
            style={styles.closebtn}
          >
            &times;
          </a>
          <div className="container">
          <h5 className='des_title'>Summary</h5>
          <p className='des_data'>This is a sever viral infection caused by the continuous coughing. this can lead to the heavy damage of the vocal cords and may lead to blood vomiting</p >
          <h5 className='des_title'>description</h5>
          <p className='des_data'>This is a sever viral infection caused by the continuous coughing. this can lead to the heavy damage of the vocal cords and may lead to blood vomiting</p >
          <h5 className='des_title'>noteByDoctor</h5>
          <p className='des_data'>This is a sever viral infection caused by the continuous coughing. this can lead to the heavy damage of the vocal cords and may lead to blood vomiting</p >
          <h5 className='des_title'>appoinmentStatus</h5>
          <p className='des_data'>Confirmed</p >
          <h5 className='des_title'>appoinmenttime</h5>
          <p className='des_data'>9:00 am</p >
          <h5 className='des_title'>appoinment date</h5>
          <p className='des_data'>29-05-2023</p >
          <h5 className='des_title'>patientRequested</h5>
          <p className='des_data'>Blood test</p >
          <h5 className='des_title'>handledByDoctor</h5>
          <p className='des_data'>Dr.j.priya</p >
          </div>

        </div>
        <span style={{ fontSize: '15px', cursor: 'pointer',textAlign : 'center', marginLeft: '30px' , marginBottom:'20px'}} onClick={this.openNav}>
         open
        </span>
      </div>
    );
  }
}

export default AppoinmentDetail;

