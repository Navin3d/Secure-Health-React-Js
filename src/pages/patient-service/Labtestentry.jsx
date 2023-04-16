import React from 'react'
import '../../styles/pages/labtestentry.css'
const Labtestentry = () => {
  return (
    <div>
        <div className="container">

            
        <div className="row">
        <h5>Lab test entry</h5>
        <hr />
        </div>

        <div className="row">
            <div className="col-md-3"><label htmlFor="">Name*</label></div>
            <div className="col-md-3"><label htmlFor=""><input id='in-box' type="text" /></label></div>
        </div>

        <div className="row">
            <div className="col-md-3"><label htmlFor="">Patient Id*</label></div>
            <div className="col-md-3"><label htmlFor=""><input id='in-box' type="text" /></label></div>
        </div>

        <div className="row">
            <div className="col-md-3"><label htmlFor="">Pathology Test*</label></div>
            <div className="col-md-3"><label htmlFor=""><input id='in-box' type="text" /></label></div>
        </div>

        <div className="row">
            <h5 className='sub-head'>
            Test Components
            </h5>
        </div>

        <table>
            <tr>
              <th id="in-box">Test</th>
              <th id="in-box">Low value</th>
              <th id="in-box">High Value</th>
              <th id="in-box">Result value</th>
              <th id="in-box">Measure Unit</th>
            </tr>
        </table>

        <div className="row">
            <div className="col-md-3">
                <button id="btn-sub">submit</button>
            </div>
            <div className="col-md-3">
                <button id="btn-sub">Reset</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Labtestentry