import React from 'react'
import '../../styles/pages/Uploaddocs.css';
import Fileupload from '../../components/Fileupload';
import uploadimg from '../../assets/images/fun-3d-cartoon-illustration-indian-doctor.jpg'

const Uploaddoc = () => {
  return (
    <div>
        <div className="container">

            <div className="content-title">
                <h4>Diagnose Me Now</h4>
                <p>---------------------</p>
            </div>
            <h2 className='uploadhead'>
                Please upload your X-ray copy here to identify the illness.
            </h2>
            <div className="row">
              <div className="col">
              <img className='uploadimg' src={uploadimg} alt="" />
              </div>  
              <div className="col"><Fileupload/></div>
           </div>
        </div>
    </div>
  )
}
export default Uploaddoc