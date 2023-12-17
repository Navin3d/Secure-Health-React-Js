import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AlertDialog from './mui/Mlpopup';

const Fileupload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      console.log('Selected File:', selectedFile.name);
    } else {
      console.log('No file selected.');
    }
  };


  return (
    <div>
        <div className="container">
            <div className="col"></div>
            <div className="col">
            <input
            className='upload-btn'
              type="file"
              accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"     
              onChange={handleFileChange}
            />
            </div>
            <div className="col"></div>
            <div className="row">
                <div className="col">
                <button className='submit-btn' onClick={handleSubmit}><AlertDialog/></button>
                </div>
                <div className="col"></div>
                <div className="col"></div>
            </div>
        </div>
    </div>
  );
};

export default Fileupload;
