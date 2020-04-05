import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SignatureCanvas from 'react-signature-canvas';
import AutosizeInput from 'react-input-autosize';

function App() {
  let newDate = new Date();
  let current = newDate.toLocaleDateString()
  
  let [headers, setHeaders] = useState({
    header:"",
    headertwo:""
  })
  let [patientInputs, setPatientInputs] = useState({
    patientName:"",
    address:"",
    age:"",
    date: current
  })
  let [doctorInputs, setDoctorInputs] = useState({
    doctorName:"",
    prc:"",
    ptr:""
  })


 function uploadImage(event) {
    // window.localStorage.clear()
    // event.target.value = null;
      var name = event.target.files[0].name;
      var parentDiv = document.getElementById('preview');
      var img = document.getElementById("img");

      function previewImage(){
        var reader = new FileReader();
        reader.addEventListener("load", function () {
          if (this.result && localStorage) {
              window.localStorage.setItem(name, this.result);
              var image = new Image();
              image.setAttribute('id', 'img');
              image.src = window.localStorage.getItem(name);
              parentDiv.append(image);
          } else {
            alert();
          }
        });
        reader.readAsDataURL(event.target.files[0]);
      }
    if(parentDiv.contains(img) === false){
        previewImage();
    } else if(parentDiv.contains(img)){
      img.outerHTML= "";
      previewImage();
     
    }
     
      console.log(name);
      console.log(event.target.files[0]);
  }

 function headerChangeHandler(e){
    let value = e.target.value;
    setHeaders({
      ...headers,
      [e.target.name]: value
    })
  }

  function patientChangeHandler(e){
    let value = e.target.value;
    setPatientInputs({
      ...patientInputs,
      [e.target.name]: value
    })
  }

  function doctorChangeHandler(e){
    let value = e.target.value;
    setDoctorInputs({
      ...doctorInputs,
      [e.target.name]: value
    })
  }

  return (
    <div className="App">
      
      <div className="landing pt-3">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <form className="form">
                <AutosizeInput type="text" 
                                placeholder="Practice Name" 
                                className="form-control header-group" 
                                id="header"
                                onChange={headerChangeHandler}
                                name="header"
                                value={headers.header}/>
          
                <AutosizeInput type="text" 
                                placeholder="Practice Details"
                                className="form-control header-group" 
                                id="header-two"
                                onChange={headerChangeHandler}
                                name="headertwo"
                                value={headers.headertwo}/>

              <hr/>

              <div className="row">
                <div className="col-8 col-md-8">
                  <div className="form-group-patient form-inline">
                    <label className="mb-0" for="patientName">Patient Name:</label>
                    <AutosizeInput type="text" 
                                    placeholder="Type here" 
                                    className="form-control col-4 col-md-8 p-0" 
                                    id="patientName"
                                    onChange = {patientChangeHandler}
                                    name="patientName"
                                    value= {patientInputs.patientName}/>   
                  </div>
                  <div className="form-group-patient form-inline">
                    <label className="mb-0" for="address">Address:</label>
                    <AutosizeInput type="text" 
                                    placeholder="Type here" 
                                    className="form-control col-4 col-md-8" 
                                    id="address"
                                    onChange = {patientChangeHandler}
                                    name="address"
                                    value= {patientInputs.address}
                                    aria-describedby="address"/>
                  </div>
                </div>
              
                <div className="col-4">
                  <div className="form-group-patient form-inline">
                    <label className="mb-0" for="age">Age:</label>
                    <AutosizeInput type="text" 
                          placeholder="Type here" 
                          className="form-control col-8" 
                          id="age"
                          onChange = {patientChangeHandler}
                          name="age"
                          value= {patientInputs.age}
                          aria-describedby="age"/>
                  </div>

                  <div className="form-group-patient form-inline">
                    <label className="mb-0" for="date">Date:</label>
                    <AutosizeInput type="text" 
                          placeholder="Header" 
                          className="form-control col-8" 
                          id="date"
                          onChange = {patientChangeHandler}
                          name="date"
                          value= {patientInputs.date}
                          aria-describedby="date"/>
                  </div>
                </div>
              </div>
              
              <p className="rx">Rx</p>

              <div className="form-group">
                <textarea type="text" className="form-control" id="textarea" aria-describedby="textarea" row="6"></textarea>
                         
              </div>
              <div className="row doctor-row">
                <div className="col-5"></div>
                <div className="col-7">
                    <div className="form-group-doctor form-inline d-flex justify-content-end">
                      <div id="preview"></div>
                      <AutosizeInput type="text" 
                              placeholder="Doctor's Name" 
                              id="doctor"
                              name="doctorName"
                              value={doctorInputs.doctorName}
                              onChange={doctorChangeHandler}/>
                     
                    </div>

                    <div className="form-group-doctor form-inline d-flex justify-content-end">
                      <label className="license" for="prc">PRC:</label>
                      <AutosizeInput type="text" 
                                    placeholder="PRC number"
                                    name="prc"
                                    value={doctorInputs.prc}
                                    onChange={doctorChangeHandler}
                                    id="prc"/>
                     
                    </div>
                    <div className="form-group-doctor form-inline d-flex justify-content-end">
                      <label className="license" for="PTR">PTR:</label>
                      <AutosizeInput type="text" 
                              placeholder="PTR number" 
                              name="ptr"
                              value={doctorInputs.ptr}
                              onChange={doctorChangeHandler} 
                              id="ptr"/>
                     
                    </div>

                </div>
              </div>
            </form> 
          </div>
          <div className="col-12 col-md-6 text-center p-5">
            <h4 className="white wd-100 text-center">Upload your signature here</h4>
            <div id="signatureUploader" className="text-dark container p-5">
              <form encType = "multipart/form-data">
                <i id="file-sig" className="fas fa-file-signature fa-5x"></i>
                <p id="namefile">Only pictures allowed.</p> 
                <p id="subnamefile">(e.g. jpg ,jpeg, png)</p>
                <input id="file-input" type="file" onChange={uploadImage}/>    
              </form>
            </div>
            <h4 className="white wd-100 text-center pt-3">Ready to download?</h4>
            <div id="saveRx" className="text-dark container p-5">
              <p>Check the preview on the left side before saving.</p>
            </div>
            <footer><small>&copy;2020gonzalesgonzalez</small></footer>
          </div>  
        </div>  
      </div>
    </div>
  );
}

export default App;
