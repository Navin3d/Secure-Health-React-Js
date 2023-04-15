import React from 'react'
import '../../styles/pages/Progressupdate.css'
const Progressupdate = () => {
  return (
    <div>
        <div className="container">

        <div className="row">
        <h5>Progress Update</h5>
        <hr />
        </div>

        <div className="row">
            <div className="col-md-3"><label htmlFor="">Name*</label></div>
            <div className="col-md-3"><label htmlFor=""><input id='in-box' type="text" /></label></div>
        </div>

        <div className="row">
            <div className="col-md-3"><label htmlFor="">Medical record number*</label></div>
            <div className="col-md-3"><label htmlFor=""><input id='in-box' type="text" /></label></div>
        </div>

        <div className="row">
            <div className="col-md-3"><label htmlFor="">Progress Status*</label></div>
            <div className="col-md-3">
                <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label for="html">HTML</label>
                <input type="radio" id="css" name="fav_language" value="CSS"/>
                <label for="css">CSS</label>
                <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                <label for="javascript">JavaScript</label>
            </div>
        </div>

        
        <div className="row">
                <div className="col-md-3"><label htmlFor="">Problems*</label></div>
                <div className="col-md-3">
                <textarea  name="w3review" rows="3" cols="23"></textarea>
                </div>
        </div>

        <div className="row">
                <div className="col-md-3"><label htmlFor="">Current Conditions*</label></div>
                <div className="col-md-3">
                <textarea  name="w3review" rows="3" cols="23"></textarea>
                </div>
        </div>

        <div className="row">
                <div className="col-md-3"><label htmlFor="">Conditions on last checkup*</label></div>
                <div className="col-md-3">
                <textarea  name="w3review" rows="3" cols="23"></textarea>
                </div>
        </div>

        
        <div className="row">
            <div className="col-md-3">
                <button>submit</button>
            </div>
            <div className="col-md-3">
                <button>Reset</button>
            </div>
        </div>


        </div>
    </div>
  )
}

export default Progressupdate