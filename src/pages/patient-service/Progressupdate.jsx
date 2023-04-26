import React from 'react'
import '../../styles/pages/Progressupdate.css'
import '../../styles/pages/Addmedicalhistory.css'
const Progressupdate = () => {
  return (
    <div>
        <div className="container">

        <div className="row">
        <h5 className='sub-head'>Progress Update</h5>
        <hr />
        </div>

        <div className="row">
            <div id="addmed-field" className="col-md-3"><label htmlFor="">Name*</label></div>
            <div className="col-md-3"><label htmlFor=""><input id='in-box' type="text" /></label></div>
        </div>

        <div className="row">
            <div id="addmed-field" className="col-md-3"><label htmlFor="">Medical record number*</label></div>
            <div className="col-md-3"><label htmlFor=""><input id='in-box' type="text" /></label></div>
        </div>

        <div className="row">
            <div id="addmed-field" className="col-md-3"><label htmlFor="">Progress Status*</label></div>
            <div className="col-md-3">
                <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label id="addmed-field"  for="html">HTML</label>
                <input type="radio" id="css" name="fav_language" value="CSS"/>
                <label id="addmed-field" for="css">CSS</label>
                <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                <label id="addmed-field" for="javascript">JavaScript</label>
            </div>
        </div>

        
        <div id="addmed-field" className="row">
                <div className="col-md-3"><label htmlFor="">Problems*</label></div>
                <div className="col-md-3">
                <textarea  name="w3review" rows="3" cols="23"></textarea>
                </div>
        </div>

        <div id="addmed-field" className="row">
                <div className="col-md-3"><label htmlFor="">Current Conditions*</label></div>
                <div className="col-md-3">
                <textarea  name="w3review" rows="3" cols="23"></textarea>
                </div>
        </div>

        <div id="addmed-field" className="row">
                <div className="col-md-3"><label htmlFor="">Conditions on last checkup*</label></div>
                <div className="col-md-3">
                <textarea  name="w3review" rows="3" cols="23"></textarea>
                </div>
        </div>

        
        <div className="row">
            <div className="col-md-1">
                <button className='addmed-btn'>submit</button>
            </div>
            <div className="col-md-1">
                <button id= "addmed-reset-red">Reset</button>
            </div>
        </div>


        </div>
    </div>
  )
}

export default Progressupdate