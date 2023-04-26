import React from 'react'
import '../../styles/pages/Addmedicalhistory.css'
import Labtest from '../../components/Labtestentrytable'
const Labtestentry = () => {
  return (
    <div>
        <div className="container">            
        <div className="row"> 
        <h5 className='sub-head'>Lab test entry</h5>
        <hr />
        </div>

        <div id="addmed-field" className="row">
        <div className="addmed-top"></div>
            <div className="col-md-3"><label htmlFor="">Name*</label></div>
            <div className="col-md-3"><label htmlFor=""><input id='in-box' type="text" /></label></div>
        </div>

        <div id="addmed-field" className="row">
        <div className="addmed-top"></div>
            <div className="col-md-3"><label htmlFor="">Patient Id*</label></div>
            <div className="col-md-3"><label htmlFor=""><input id='in-box' type="text" /></label></div>
        </div>

        <div id="addmed-field" className="row">
        <div className="addmed-top"></div>
            <div className="col-md-3"><label htmlFor="">Pathology Test*</label></div>
            <div className="col-md-3"><label htmlFor=""><input id='in-box' type="text" /></label></div>
        </div>

        <div className="row">
        <div className="addmed-top"></div>
            <h5 className='sub-head'>
            Test Components
            </h5>
        </div>
        <div className="addmed-top"></div>
        <div className="addmed-top"></div>
        {/* <table>
            <tr>
              <th id="in-box">Test</th>
              <th id="in-box">Low value</th>
              <th id="in-box">High Value</th>
              <th id="in-box">Result value</th>
              <th id="in-box">Measure Unit</th>
            </tr>
        </table> */}
        <div> 
            <Labtest/>
        </div>

        <div className="row">
        <div className="addmed-top"></div>
            <div className="col-md-1">
                <button className='addmed-btn' id="btn-sub">submit</button>
            </div>
            <div className="col-md-1">
                <button  id= "addmed-reset-red">Reset</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Labtestentry