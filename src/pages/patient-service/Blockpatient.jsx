import React from 'react'
import '../../styles/pages/Addmedicalhistory.css'

const Blockpatient = () => {

    
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
                                    <div className="col"><label htmlFor=""><input id='in-box' type="text" /></label></div>
                                </div>

                                <div id="addmed-field1" className="row">
                                    <div className="addmed-top1"></div>
                                    <div className="col"><label htmlFor="">Blood Group</label></div>
                                    <div className="col"><label htmlFor=""><input id='in-box' type="text" /></label></div>
                                </div>

                                <div className="row">
                                    <div className="addmed-top1"></div>
                                    <div id="addmed-field1" className="col"><label htmlFor="">Has HIV</label></div>
                                    <div className="col">
                                        <input type="radio" id="html" name="fav_language" value="HTML" />
                                        <label id="addmed-field1" for="html">Yes</label>
                                        <input type="radio" id="css" name="fav_language" value="CSS" />
                                        <label id="addmed-field1" for="css">No</label>
                                    </div>
                                </div>


                                <div id="addmed-field1" className="row">
                                    <div className="addmed-top1"></div>
                                    <div className="col"><label htmlFor="">Blood pressure Detail</label></div>
                                    <div className="col"><label htmlFor=""><input id='in-box' type="text" /></label></div>
                                </div>

                                <div id="addmed-field1" className="row">
                                    <div className="addmed-top1"></div>
                                    <div className="col"><label htmlFor="">Cardio vascular</label></div>
                                    <div className="col"><label htmlFor=""><input id='in-box' type="text" /></label></div>
                                </div>

                                <div className="row">
                                    <div className="addmed-top1"></div>
                                    <div id="addmed-field1" className="col"><label htmlFor="">Is activated</label></div>
                                    <div className="col">
                                        <input type="radio" id="html" name="fav_language" value="HTML" />
                                        <label id="addmed-field1" for="html">Yes</label>
                                        <input type="radio" id="css" name="fav_language" value="CSS" />
                                        <label id="addmed-field1" for="css">No</label>
                                    </div>
                                </div>


                                <div className="row">
                    
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

export default Blockpatient