import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SignatureCanvas from 'react-signature-canvas';
import AutosizeInput from 'react-input-autosize';
import htmlToImage from 'html-to-image';

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

  useEffect(() => {
    let doctorinfo = JSON.parse(window.localStorage.getItem("doctorInputs"))
    if(doctorinfo !== null){ 
      setDoctorInputs(doctorinfo)
    }
  }, []);
 
  

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

  function generatePrescription(){
    htmlToImage.toJpeg(document.getElementById('fullPrescription'), { quality: 0.95 })
      .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'RX-'+ patientInputs.patientName +'.jpeg';
      link.href = dataUrl;
      link.click();
    });
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

  function DeleteImage(name){
    alert(name)
    window.localStorage.removeItem(name);
  }
  
  function saveDoctorInfo(){
     window.localStorage.setItem("doctorInputs", JSON.stringify(doctorInputs));
     alert("Doctor's information saved")
  }
  function clearDoctorInfo(){
    window.localStorage.removeItem("doctorInputs")
    setDoctorInputs({
      doctorName:"",
      prc:"",
      ptr:""})
    alert("Doctor's information cleared")
  }
    console.log(patientInputs.date)

  return (
    <div className="App">
      
      <div className="landing pt-3">
      <div className="row">
        <div className="col-6">
          <form className="form" id="fullPrescription">
            <div className="form-group">
              <input type="text" 
                    placeholder="Practice Name" 
                    className="form-control header-group" 
                    id="header" 
                    aria-describedby="header"></input>
             
            </div>

            <div className="form-group">
              <input type="text" 
                    placeholder="Practice Details"
                    className="form-control header-group" 
                    id="header-two" 
                    aria-describedby="header-two"></input>
             
            </div>
            <hr/>

            <div className="row">
              <div className="col-8">
                <div className="form-group-patient form-inline">
                  <label className="" for="patientName">Patient Name:</label>
                  <input type="text" 
                          placeholder="Type here" 
                          className="form-control col-8" 
                          id="patientName"
                          onChange = {patientChangeHandler}
                          name="patientName"
                          value= {patientInputs.patientName}
                          aria-describedby="patientName"></input>   
                </div>
                <div className="form-group-patient form-inline">
                  <label className="" for="address">Address:</label>
                  <input type="text" 
                        placeholder="Type here" 
                        className="form-control col-8" 
                        id="address"
                        onChange = {patientChangeHandler}
                        name="address"
                        value= {patientInputs.address}
                        aria-describedby="address"></input>
                </div>
              </div>
            
              <div className="col-4">
                <div className="form-group-patient form-inline">
                  <label className="" for="age">Age:</label>
                  <input type="text" 
                        placeholder="Type here" 
                        className="form-control col-8" 
                        id="age"
                        onChange = {patientChangeHandler}
                        name="age"
                        value= {patientInputs.age}
                        aria-describedby="age"></input>
                </div>

                <div className="form-group-patient form-inline">
                  <label className="" for="date">Date:</label>
                  <input type="text" 
                        placeholder="Header" 
                        className="form-control col-8" 
                        id="date"
                        onChange = {patientChangeHandler}
                        name="date"
                        value= {patientInputs.date}
                        aria-describedby="date"></input>
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
        <div className="col-6 text-dark d-flex justify-content-center align-items-center">
          <div id="signatureUploader">
            <div>Please upload your signature</div>
            <form encType = "multipart/form-data">
              <input type="file" onChange={uploadImage} />
            </form>
            <button className="btn btn-primary" onClick={generatePrescription}>
              Generate Prescription
            </button>
            <button className="btn btn-success" onClick={saveDoctorInfo}>
              Save Doctor's Information
            </button>
            <button className="btn btn-warning" onClick={clearDoctorInfo}>
              Clear Doctors Information
            </button>
          
          </div>
          
        </div> 
      </div>
       
      </div>

    </div>
  );
}

export default App;
