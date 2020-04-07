import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
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
  let [disabledBtn, setDisabledBtn] = useState(true);

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
    htmlToImage.toJpeg(document.getElementById('fullPrescription'), { quality: 1 })
      .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'Rx-' + patientInputs.patientName + '-name.jpeg';
      link.href = dataUrl;
      link.click();
    });
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

  function download(){
    if(headers.header !== "" && headers.headertwo !== ""
        && patientInputs.patientName !== "" && patientInputs.address !== ""
        && patientInputs.age !== "" && patientInputs.date !==""
        && doctorInputs.doctorName !== "" && doctorInputs.prc !== ""
        && doctorInputs.ptr !== ""){
      if(disabledBtn){
        setDisabledBtn(false);
      }
    } else{
        if(!disabledBtn){
          setDisabledBtn(true);
        }
      } 
    }

  download();

  return (
    <div className="App">
      
      <div className="landing pt-2">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <form className="form white-containers" id="fullPrescription">
              <div className="form-group">
                <AutosizeInput type="text" 
                                  placeholder="Practice Name" 
                                  className="form-control header-group" 
                                  id="header"
                                  onChange={headerChangeHandler}
                                  name="header"
                                  value={headers.header}/>
               
              </div>

              <div className="form-group">
                <AutosizeInput type="text" 
                                  placeholder="Practice Details"
                                  className="form-control header-group" 
                                  id="header-two"
                                  onChange={headerChangeHandler}
                                  name="headertwo"
                                  value={headers.headertwo}/>
               
              </div>
              <hr/>

              <div className="row">
                <div className="col-8 col-md-8">
                  <div className="form-group-patient form-inline">
                    <label className="mb-0" htmlFor="patientName">Patient Name:</label>
                    <AutosizeInput type="text" 
                                      placeholder="Type here" 
                                      className="form-control col-4 col-md-8" 
                                      id="patientName"
                                      onChange = {patientChangeHandler}
                                      name="patientName"
                                      value= {patientInputs.patientName}/>   
                  </div>
                  <div className="form-group-patient form-inline">
                    <label className="mb-0" htmlFor="address">Address:</label>
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
                    <label className="mb-0" htmlFor="age">Age:</label>
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
                    <label className="mb-0" htmlFor="date">Date:</label>
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
                      <label className="license m-0" htmlFor="prc">PRC:</label>
                      <AutosizeInput type="text" 
                                    placeholder="PRC number"
                                    name="prc"
                                    value={doctorInputs.prc}
                                    onChange={doctorChangeHandler}
                                    id="prc"/>
                     
                    </div>
                    <div className="form-group-doctor form-inline d-flex justify-content-end">
                      <label className="license m-0" htmlFor="PTR">PTR:</label>
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
          <div className="right-div col-12 col-md-12 col-lg-6 text-center p-5">
            <h4 className="white wd-100 text-center">Upload your signature here</h4>
            <div id="signatureUploader" className="text-dark container white-containers">
              <form encType="multipart/form-data">
                <div id="file-sig-div">
                  <i id="file-sig" className="fas fa-file-signature fa-4x"></i> 
                  <div>
                  <p id="namefile">Only pictures allowed.</p> 
                  <p id="subnamefile">(e.g. jpg ,jpeg, png)</p>
                  </div>
                </div>
                <input id="file-input" type="file" onChange={uploadImage}/>
                
                <hr/>
                <div className="btn-div">
                  <button id="btn-savedr" className="btn text-white" onClick={saveDoctorInfo}>
                  Save Doctor's Info
                  </button>
                  <button id="btn-cleardr" className="btn" onClick={clearDoctorInfo}>
                    Clear Doctor's Info
                  </button>    
                </div>
              </form>
            </div>
            <h4 className="white wd-100 text-center pt-3">Done writing your prescription?</h4>
            <div id="saveRx" className="text-dark container p-4 white-containers">
              <p id="notice">If you cannot click the download button, you might be missing some details on your prescription. Please check.</p>
              <hr/>
              <button id="btn-dl" 
                      className="btn text-white" 
                      onClick={generatePrescription}
                      disabled={disabledBtn} 
                      type="button">
                Ready to Download!
              </button> 
            </div>

          </div> 
            <footer>
              <small>&copy; 2020 gonzalesgonzalez</small>
            </footer>  
        </div>  
      </div>
    </div>
  );
}

export default App;
