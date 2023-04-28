import React from 'react'

const Blockpatientdisp = () => {
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
                                <h5 className='sub-head1'>Block Patient Details</h5>
                            </div>
                           
                        </div>

                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">ID</label></div>
                            <div className="col"><label className='disp-p' htmlFor="">Doc-9892</label></div>
                        </div>

                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Blood Group</label></div>
                            <div className="col"><label className='disp-p' htmlFor="">B+ve</label></div>
                        </div>

                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Has HIV</label></div>
                            <div className="col"><label className='disp-p' htmlFor="">Yes</label></div>
                        </div>
                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Blood pressure Detail</label></div>
                            <div className="col"><label className='disp-p' htmlFor="">!20/90 bpm</label></div>
                        </div>

                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Cardio vascular</label></div>
                            <div className="col"><label  className='disp-p' htmlFor=""> 120/80bpm</label></div>
                        </div>

                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Is activated</label></div>
                            <div className="col"><label  className='disp-p' htmlFor=""> Yes </label></div>
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

export default Blockpatientdisp