import React, { useState } from 'react'
import '../../styles/pages/Addmedicalhistory.css'

const Dischargesummarydisp = () => {
    const DISCHARGE_SUM_DISP = [
        {initcause : "Has a critical crevic damage" , finalstatus :  "Safe for as of now" , id: "doc-56348" , notes : "Please take a bed rest for 2 months", detaileddesc : "crack at the 12th bottom cervic bone which can be dangerous for the following action so needed medication for atleast 6 days"},
    ]

    const[dischargesum , setdischargesum] = useState(DISCHARGE_SUM_DISP);
  return (
    <div>
        <div className="dsbg">
        <div className="container">
            <div className="row">
                <div className="col-md-3">

                </div>
                <div className="col-md-6">
                    {dischargesum.map((dischargedisp ,index)=>(
                    <div className="ds-form" key={index}>
                        <div className="row">
                       
                            <div className="col">
                                <h5 className='sub-head1'>Discharge Summary</h5>
                            </div>
                           
                        </div>

                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Initial Cause*</label></div>
                            <div className="col"><label className='disp-p' htmlFor="">{dischargedisp.initcause}</label> </div>
                        </div>

                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Final status*</label></div>
                            <div className="col"><label className='disp-p' htmlFor=""> {dischargedisp.finalstatus}</label></div>
                        </div>

                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Treated Doctor ID*</label></div>
                            <div className="col"><label className='disp-p' htmlFor="">{dischargedisp.id}</label></div>
                        </div>
                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Notes</label></div>
                            <div className="col"><label className='disp-p' htmlFor="">{dischargedisp.notes}</label></div>
                        </div>

                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Detailed description</label></div>
                            <div className="col"><label  className='disp-p' htmlFor="">{dischargedisp.detaileddesc}</label></div>
                        </div>

                        {/* <div className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col">
                                <button className='addmed-btn'>Submit</button>
                            </div>
                            <div className="col"></div>
                            <div className="col"></div>
                    
                            <div className="col"></div>
                        </div> */}


                    </div>))}
                </div>
                <div className="col-md-3">

                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Dischargesummarydisp