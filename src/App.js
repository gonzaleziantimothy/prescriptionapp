import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SignatureCanvas from 'react-signature-canvas'

function App() {
  let newDate = new Date();
  let current = newDate.toLocaleDateString()
  
  let [headers, setHeaders] = useState({
    header:"",
    headertwo:""
  })
  let [patientInputs, setPatientInputs] = useState({
    PatientName:"",
    address:"",
    age:"",
    date: current
  })
  let [doctorsInputs, setDoctorsInputs] = useState({
    DoctorsName:"",
    PRC:"",
    PTR:""
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

  function changeHandler(e){
    let value = e.target.value;
    setPatientInputs({
      ...patientInputs,
      [e.target.name]: value
    })
  }

  function DeleteImage(name){
    alert(name)
    window.localStorage.removeItem(name);
  }
  
console.log(patientInputs.date)

  return (
    <div className="App">
      
      <div className="landing pt-2">
      <div className="row">
        <div className="col-6">
          <form className="form">
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
                          onChange = {changeHandler}
                          name="PatientName"
                          value= {patientInputs.PatientName}
                          aria-describedby="patientName"></input>   
                </div>
                <div className="form-group-patient form-inline">
                  <label className="" for="address">Address:</label>
                  <input type="text" 
                        placeholder="Type here" 
                        className="form-control col-8" 
                        id="address"
                        onChange = {changeHandler}
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
                        onChange = {changeHandler}
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
                        onChange = {changeHandler}
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
                  <div className="form-group-doctor form-inline">
                    <div id="preview"></div>
                    <input type="text" placeholder="Doctor's Name" className="form-control" id="doctor" aria-describedby="Doctor"></input>
                   
                  </div>

                  <div className="form-group-doctor form-inline d-flex justify-content-end">
                    <label className="license" for="prc">PRC:</label>
                    <input type="number" placeholder="PRC number" className="license form-control" 
                    id="PRC" aria-describedby="PRC"></input>
                   
                  </div>
                  <div className="form-group-doctor form-inline d-flex justify-content-end">
                    <label className="license" for="PTR">PTR:</label>
                    <input type="number" placeholder="PTR number" className="license form-control"
                     id="PTR" aria-describedby="PTR"></input>
                   
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
          </div>
        </div> 
      </div>
       
      </div>

    </div>
  );
}

export default App;
