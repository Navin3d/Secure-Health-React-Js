import React, { useState } from 'react'

const Blockpatientdisp = () => {

    const BLOCK_PAT_DISP = [
        {id:"Doc-9892" , Bloodgroup : "b+ve" , hashiv : "yes" , Bloodpressure : "20/90" , cardiovascular : "120/80 bpm" , isactivated : "Yes"}
    ];

    const[Blockpatdata , setblockpatdata] = useState(BLOCK_PAT_DISP);


  return (
    <div>
        <div className="dsbg">
        <div className="container">
            <div className="row">
                <div className="col-md-3">

                </div>
                <div className="col-md-6">
                    
                    {Blockpatdata.map((dataum,index)=>(
                        <div className="ds-form" key={index}>
                        <div className="row">
                       
                            <div className="col">
                                <h5 className='sub-head1'>Block Patient Details</h5>
                            </div>
                           
                        </div>
              
                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">{dataum.id}</label></div>
                            <div className="col"><label className='disp-p' htmlFor="">Doc-9892</label></div>
                        </div>

                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Blood Group</label></div>
                            <div className="col"><label className='disp-p' htmlFor="">{dataum.Bloodgroup}</label></div>
                        </div>

                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Has HIV</label></div>
                            <div className="col"><label className='disp-p' htmlFor="">{dataum.hashiv}</label></div>
                        </div>
                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Blood pressure Detail</label></div>
                            <div className="col"><label className='disp-p' htmlFor="">{dataum.Bloodpressure}</label></div>
                        </div>

                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Cardio vascular</label></div>
                            <div className="col"><label  className='disp-p' htmlFor=""> {dataum.cardiovascular}</label></div>
                        </div>

                        <div id="addmed-field1" className="row">
                        <div className="addmed-top1"></div>
                            <div className="col"><label htmlFor="">Is activated</label></div>
                            <div className="col"><label  className='disp-p' htmlFor=""> {dataum.isactivated} </label></div>
                        </div>
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

export default Blockpatientdisp