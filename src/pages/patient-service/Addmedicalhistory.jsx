import React from 'react' 
import '../../styles/pages/Addmedicalhistory.css'
import Table from '../../components/Addmedtable';
import Table_acc from '../../components/Addmedtable1'
import Table_prblm from '../../components/Addmedtable2';
const options = [
    { value: "N/a", label: "N/a" },
    { value: "option2", label: "Grandfather" },
    { value: "option3", label: "Grandmother" },
    { value: "option3", label: "Mother" },
    { value: "option3", label: "Father" },
  ];

const Addmedicalhistory = () => {
  return (
    <div>
        <div className="container">
        <div className="row">
        <h5 className='addmed-head'>Add Medical Record</h5>
        <hr />
        </div>
        <div className="row">
            <h5 className='sub-head'>
            Patient Information
            </h5>
            <div className="addmed-top"></div>
        </div>
        <div className="row">
            <div id="addmed-field"className="col-md-3"><label htmlFor="">Name*</label></div>
            <div className="col-md-3"><label htmlFor=""><input id='in-box' type="text" /></label></div>
            <div className="addmed-top"></div>
        </div>
        <div id="addmed-field" className="row">
            <div className="col-md-3"><label htmlFor="">Age*</label></div>
            <div className="col-md-3"><label htmlFor=""><input id='in-box' type="text" /></label></div>
            <div className="addmed-top"></div>
        </div>
        <div id="addmed-field"className="row">
            <div className="col-md-3"><label htmlFor="">SSN*</label></div>
            <div className="col-md-3"><label htmlFor=""><input id='in-box' type="text" /></label></div>
            <div className="addmed-top"></div>
        </div>
        <div className="row">
        <h5 className='sub-head'>
        <div className="addmed-top"></div>
            Family & Personal History
            <div className="addmed-top"></div>
        </h5>
        </div>
        <div className="row">
        <div className="addmed-top"></div>
            <p id="addmed-tagline">Please Select Those Who Have Had Any Of The Following Conditions:</p>
            <div className="addmed-top"></div>
        </div>
        <div id="addmed-field" className="row">
        <div className="addmed-top"></div>
            <div className="col-md-3"><label htmlFor="">Osteoporosis*</label></div>
            <div className="col-md-3">
            <select>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
            </select>
            </div>
        </div>

        <div id="addmed-field" className="row">
        <div className="addmed-top"></div>
            <div className="col-md-3"><label htmlFor="">Cancer*</label></div>
            <div className="col-md-3">
            <select>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
            </select>
            </div>
        </div>

        <div id="addmed-field" className="row">
        <div className="addmed-top"></div>
            <div className="col-md-3"><label htmlFor="">Type of Cancer*</label></div>
            <div className="col-md-3"><label htmlFor=""><input id='in-box' type="text" /></label></div>
        </div>

        <div id="addmed-field" className="row">
        <div className="addmed-top"></div>
            <div className="col-md-3"><label htmlFor="">Bleeding disorder*</label></div>
            <div className="col-md-3">
            <select>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
            </select>
            </div>
        </div>

        <div id="addmed-field" className="row">
        <div className="addmed-top"></div>
            <div className="col-md-3"><label htmlFor="">Diabetes*</label></div>
            <div className="col-md-3">
            <select>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
            </select>
            </div>
        </div>

        <div id="addmed-field" className="row">
        <div className="addmed-top"></div>
            <div className="col-md-3"><label htmlFor="">HighBlood Pressure*</label></div>
            <div className="col-md-3">
            <select>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
            </select>
            </div>
        </div>

        <div id="addmed-field" className="row">
        <div className="addmed-top"></div>
            <div className="col-md-3"><label htmlFor="">Strokes*</label></div>
            <div className="col-md-3">
            <select>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
            </select>
            </div>
        </div>

        <div id="addmed-field" className="row">
        <div className="addmed-top"></div>
            <div className="col-md-3"><label htmlFor="">Heart Attack*</label></div>
            <div className="col-md-3">
            <select>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
            </select>
            </div>
        </div>

        <div id="addmed-field"className="row">
        <div className="addmed-top"></div>
            <div className="col-md-3"><label htmlFor="">Gentic Disorder*</label></div>
            <div className="col-md-3">
            <select>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
            </select>
            </div>
        </div>

        <div id="addmed-field" className="row">
        <div className="addmed-top"></div>
            <div className="col-md-3"><label htmlFor="">Any Other Disease With Family Member*</label></div>
            <div className="col-md-3">
            <textarea  name="w3review" rows="3" cols="23"></textarea>
            </div>
        </div>
        
        <div id="addmed-field" className="row">
        <div className="addmed-top"></div>
            <h5 className='sub-head'>
            Allergies
            </h5>
            <div className="addmed-top"></div>
        </div>

            <div id="addmed-field" className="row">
            <div className="addmed-top"></div>
                <div className="col-md-3"><label htmlFor="">List All Known Allergies*</label></div>
                <div className="col-md-3">
                <textarea  name="w3review" rows="3" cols="23">I am allergic to peanuts</textarea>
                </div>
            </div>

                
        <div id="addmed-field" className="row">
        <div className="addmed-top"></div>
            <h5 className='sub-head'>
            Medications And Supplements
            </h5>
        </div>

        <div id="addmed-field" className="row">
        <div className="addmed-top"></div>
            <p id="addmed-tagline">PLEASE LIST ALL MEDICATIONS, NUTRITIONAL SUPPLEMENTS(S), HERBS(H) ,VITAMINS(V) AND OVER THE COUNTER DRUGS(OTC)::</p>
            <div className="addmed-top"></div>
        </div>
        <div>
        <div className="addmed-top"></div>
         <Table />
        </div>

        <div id="addmed-field" className="row">
        <div className="addmed-top"></div>
            <h5 className='sub-head'>
            Accidents
            </h5>
        </div>

        <div id="addmed-field" className="row">
        <div className="addmed-top"></div>
            <p id="addmed-tagline">PLEASE LIST ANY PAST ACCIDENTS, SEVERE FALLS, MAJOR INJURIES AS WELL AS FRACTURES AND DISLOCATIONS</p>
            <div className="addmed-top"></div>
        </div>
        <div>
        <div className="addmed-top"></div>
            <Table_acc/>
        </div>
        <div id="addmed-field" className="row">
        <div className="addmed-top"></div>
            <h5 className='sub-head'>
            Surgeries And Hospitalization
            </h5>
        </div>

        <div id="addmed-field" className="row">
        <div className="addmed-top"></div>
            <p id="addmed-tagline"> PLEASE LIST ANY SURGERIES AND HOSPITALIZATIONS</p>
            <div className="addmed-top"></div>
        </div>

        {/* <table>
            <tr>
              <th id="in-box">Doctor</th>
              <th id="in-box">Problem Type</th>
              <th id="in-box">Year</th>
              <th id="in-box">Residual problem</th>
            </tr>
        </table> */}
           <div className="addmed-top"></div>
        <div><Table_prblm/></div>
        <hr />

        <div id="addmed-field" className="row">
        <div className="addmed-top"></div>
            <div className="col-md-3"><label htmlFor="">Any Other notes</label></div>
            <div className="col-md-3">
            <textarea  name="w3review" rows="3" cols="23"></textarea>
            </div>
        </div>
        <hr />
 
        <div className="row">
        <div className="addmed-top"></div>
            <div className="col-md-1">
                <button className='addmed-btn'>Submit</button>
            </div>
            <div className="col-md-1">
                <button id= "addmed-reset-red">Reset</button>
            </div>
        </div>

        </div>
        
    </div>
  )
}

export default Addmedicalhistory

