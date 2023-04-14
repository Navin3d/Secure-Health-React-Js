import React from 'react'
import '../../styles/pages/Addmedicalhistory.css'

const Addmedicalhistory = () => {
  return (
    <div>
        <div className="container">
        <div className="row">
        <h5>Add Medical History</h5>
        <hr />
        </div>
        <div className="row">
            <h5 className='sub-head'>
            Patient Information
            </h5>
        </div>
        <div className="row">
            <div className="col-md-3"><label htmlFor="">Name*</label></div>
            <div className="col-md-3"><label htmlFor=""><input id='in-box' type="text" /></label></div>
        </div>
        <div className="row">
            <div className="col-md-3"><label htmlFor="">Age*</label></div>
            <div className="col-md-3"><label htmlFor=""><input id='in-box' type="text" /></label></div>
        </div>
        <div className="row">
            <div className="col-md-3"><label htmlFor="">SSN*</label></div>
            <div className="col-md-3"><label htmlFor=""><input id='in-box' type="text" /></label></div>
        </div>
        <div className="row">
        <h5 className='sub-head'>
            Family & Personal History
        </h5>
        </div>
        <div className="row">
            <p>Please Select Those Who Have Had Any Of The Following Conditions:</p>
        </div>
        <div className="row">
            <div className="col-md-3"><label htmlFor="">Osteoporosis*</label></div>
            <div className="col-md-3">
                    <select name="cars" id="cars">
                        <option value="volvo">Grandfather</option>
                        <option value="saab">Grandmother</option>
                        <option value="mercedes">Myself</option>
                        <option value="audi">Father</option>
                    </select>
            </div>
        </div>

        <div className="row">
            <div className="col-md-3"><label htmlFor="">Cancer*</label></div>
            <div className="col-md-3">
                    <select name="cars" id="cars">
                        <option value="volvo">Grandfather</option>
                        <option value="saab">Grandmother</option>
                        <option value="mercedes">Myself</option>
                        <option value="audi">Father</option>
                    </select>
            </div>
        </div>

        <div className="row">
            <div className="col-md-3"><label htmlFor="">Type of Cancer*</label></div>
            <div className="col-md-3"><label htmlFor=""><input id='in-box' type="text" /></label></div>
        </div>

        <div className="row">
            <div className="col-md-3"><label htmlFor="">Bleeding disorder*</label></div>
            <div className="col-md-3">
                    <select name="cars" id="cars">
                        <option value="volvo">Grandfather</option>
                        <option value="saab">Grandmother</option>
                        <option value="mercedes">Myself</option>
                        <option value="audi">Father</option>
                    </select>
            </div>
        </div>

        <div className="row">
            <div className="col-md-3"><label htmlFor="">Diabetes*</label></div>
            <div className="col-md-3">
                    <select name="cars" id="cars">
                        <option value="volvo">Grandfather</option>
                        <option value="saab">Grandmother</option>
                        <option value="mercedes">Myself</option>
                        <option value="audi">Father</option>
                    </select>
            </div>
        </div>

        <div className="row">
            <div className="col-md-3"><label htmlFor="">HighBlood Pressure*</label></div>
            <div className="col-md-3">
                    <select name="cars" id="cars">
                        <option value="volvo">Grandfather</option>
                        <option value="saab">Grandmother</option>
                        <option value="mercedes">Myself</option>
                        <option value="audi">Father</option>
                    </select>
            </div>
        </div>

        <div className="row">
            <div className="col-md-3"><label htmlFor="">Strokes*</label></div>
            <div className="col-md-3">
                    <select name="cars" id="cars">
                        <option value="volvo">Grandfather</option>
                        <option value="saab">Grandmother</option>
                        <option value="mercedes">Myself</option>
                        <option value="audi">Father</option>
                    </select>
            </div>
        </div>

        <div className="row">
            <div className="col-md-3"><label htmlFor="">Heart Attack*</label></div>
            <div className="col-md-3">
                    <select name="cars" id="cars">
                        <option value="volvo">Grandfather</option>
                        <option value="saab">Grandmother</option>
                        <option value="mercedes">Myself</option>
                        <option value="audi">Father</option>
                    </select>
            </div>
        </div>

        <div className="row">
            <div className="col-md-3"><label htmlFor="">Gentic Disorder*</label></div>
            <div className="col-md-3">
                    <select name="cars" id="cars">
                        <option value="volvo">Grandfather</option>
                        <option value="saab">Grandmother</option>
                        <option value="mercedes">Myself</option>
                        <option value="audi">Father</option>
                    </select>
            </div>
        </div>

        <div className="row">
            <div className="col-md-3"><label htmlFor="">Any Other Disease With Family Member*</label></div>
            <div className="col-md-3">
            <textarea  name="w3review" rows="3" cols="23"></textarea>
            </div>
        </div>
        
        <div className="row">
            <h5 className='sub-head'>
            Allergies
            </h5>
        </div>

            <div className="row">
                <div className="col-md-3"><label htmlFor="">List All Known Allergies*</label></div>
                <div className="col-md-3">
                <textarea  name="w3review" rows="3" cols="23">I am allergic to peanuts</textarea>
                </div>
            </div>

                
        <div className="row">
            <h5 className='sub-head'>
            Medications And Supplements
            </h5>
        </div>

        <div className="row">
            <p>PLEASE LIST ALL MEDICATIONS, NUTRITIONAL SUPPLEMENTS(S), HERBS(H) ,VITAMINS(V) AND OVER THE COUNTER DRUGS(OTC)::</p>
        </div>

        <table>
            <tr id="in-box">
              <th id="in-box">Medication</th>
              <th id="in-box">Milligrams/Day</th>
              <th id="in-box">S,H,V,OTC</th>
              <th id="in-box">Milligrams/Day</th>
            </tr>
        </table>

        <div className="row">
            <h5 className='sub-head'>
            Accidents
            </h5>
        </div>

        <div className="row">
            <p>PLEASE LIST ANY PAST ACCIDENTS, SEVERE FALLS, MAJOR INJURIES AS WELL AS FRACTURES AND DISLOCATIONS</p>
        </div>

        <table>
            <tr>
              <th id="in-box">Year</th>
              <th id="in-box">Type of Accident</th>
              <th id="in-box">Residual problem</th>
            </tr>
        </table>

        <div className="row">
            <h5 className='sub-head'>
            Surgeries And Hospitalization
            </h5>
        </div>

        <div className="row">
            <p>PLEASE LIST ANY SURGERIES AND HOSPITALIZATIONS</p>
        </div>

        <table>
            <tr>
              <th id="in-box">Doctor</th>
              <th id="in-box">Problem Type</th>
              <th id="in-box">Year</th>
              <th id="in-box">Residual problem</th>
            </tr>
        </table>
        <hr />

        <div className="row">
            <div className="col-md-3"><label htmlFor="">Any Other notes</label></div>
            <div className="col-md-3">
            <textarea  name="w3review" rows="3" cols="23"></textarea>
            </div>
        </div>
        <hr />

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

export default Addmedicalhistory

