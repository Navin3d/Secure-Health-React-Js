import React from 'react'
import '../../styles/pages/Addmedicalhistory.css'

const Dischargesummary = () => {
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
                            <div className="col"><label htmlFor=""><input id='in-box' type="text" /></label></div>
                        </div>

                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Final status*</label></div>
                            <div className="col"><label htmlFor=""><input id='in-box' type="text" /></label></div>
                        </div>

                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Treated Doctor ID*</label></div>
                            <div className="col"><label htmlFor=""><input id='in-box' type="text" /></label></div>
                        </div>
                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Notes</label></div>
                            <div className="col"><textarea  name="w3review" rows="3" cols="23"></textarea></div>
                        </div>

                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Detailed description</label></div>
                            <div className="col"><textarea  name="w3review" rows="3" cols="23"></textarea></div>
                        </div>

                        <div className="row">
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
                        </div>


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

export default Dischargesummary