import React from 'react'
import '../../styles/pages/Addmedicalhistory.css'

const Dischargesummarydisp = () => {
  return (
    <div>
        <div className="dsbg">
        <div className="container">
            <div className="row">
                <div className="col-md-3">

                </div>
                <div className="col-md-6">
                    <div className="ds-form">
                        <div className="row">
                       
                            <div className="col">
                                <h5 className='sub-head1'>Discharge Summary</h5>
                            </div>
                           
                        </div>

                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Initial Cause*</label></div>
                            <div className="col"><label className='disp-p' htmlFor="">Has a critical crevic damage</label></div>
                        </div>

                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Final status*</label></div>
                            <div className="col"><label className='disp-p' htmlFor="">Safe for as of now</label></div>
                        </div>

                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Treated Doctor ID*</label></div>
                            <div className="col"><label className='disp-p' htmlFor="">doc-56348</label></div>
                        </div>
                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Notes</label></div>
                            <div className="col"><label className='disp-p' htmlFor="">Please take a bed rest for 2 months</label></div>
                        </div>

                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Detailed description</label></div>
                            <div className="col"><label  className='disp-p' htmlFor="">crack at the 12th bottom cervic bone which can be dangerous for the following action so needed medication for atleast 6 days</label></div>
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


                    </div>
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