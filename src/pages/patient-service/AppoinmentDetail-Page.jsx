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
            width: this.state.sidenavOpen ? '500px' : '0'
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
          <h2>Summary</h2>
          <p>text</p>
          <h2>description</h2>
          <p>text</p>
          <h2>noteByDoctor</h2>
          <p>text</p>
          <h2>appoinmentStatus</h2>
          <p>text</p>
          <h2>appoinmentTime</h2>
          <p>text</p>
          <h2>appoinmentDate</h2>
          <p>text</p>
          <h2>patientRequested</h2>
          <p>text</p>
          <h2>handledByDoctor</h2>
          <p>text</p>
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

