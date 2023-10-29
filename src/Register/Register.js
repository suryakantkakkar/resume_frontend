import React, { useState , useEffect} from 'react';
import Header from '../Header/Header';
import Save from "../Icons/Save.png"
import Success from "../Icons/Success.png"
import './Register.css';
import { uploadResume } from '../Services/api-service'; 

function Register() {
  const [isSuccess, SetisSuccess]= useState(false)
  const [id, SetiD]= useState('')
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    mobile: '',
    nationality: '',
    college: '',
    course: '',
    location: '',
    startDate: '',
    endDate: '',
    currentCompany: '',
    currentLocation: '',
    totalExperience: '',
    jobDescription: '',
    skills:'',
  });

  const handleSaveDetails = async () => {
    try {
      const result = await uploadResume(state);
      if(result?.status==201)
      {
        SetiD(result?.data)
        SetisSuccess(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleFieldChange = (e) => {
    e.persist(); 
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
   
  };

  useEffect(()=>
  {

  })


    return (
      <div>
      <Header></Header>
      {isSuccess ? (
        <div className='success-screen'>
          <img src={Success}></img>
          <span className='success-heading'>Resume Details Saved Successfully</span>
          <span className='id-text'>Your Resume Id is {id}</span>
        </div>
      ):(
        <div>
      <div className='register-details'>

      <div className='tab'>
      <span className='headings'>Personal Details</span>
      <div className='details'>
      <div className='attribute'>
       <span className='static-text'>First Name*</span>
       <input className='input' name='firstName' value={state.firstName} onChange={handleFieldChange}/>
      </div>

      <div className='attribute'>
       <span className='static-text'>Last Name*</span>
       <input className='input' name='lastName' value={state.lastName} onChange={handleFieldChange}/>
      </div>

      <div className='attribute'>
       <span className='static-text'>Email*</span>
       <input className='input' name='email' value={state.email} onChange={handleFieldChange}/>
      </div>

      <div className='attribute'>
       <span className='static-text'>Gender*</span>
       <input className='input' name='gender' value={state.gender} onChange={handleFieldChange}/>
      </div>

      <div className='attribute'>
       <span className='static-text'>Mobile*</span>
       <input className='input' name='mobile' value={state.mobile} onChange={handleFieldChange}/>
      </div>

      <div className='attribute'>
       <span className='static-text'>Nationality*</span>
       <input className='input' name='nationality' value={state.nationality} onChange={handleFieldChange}/>
      </div>
      </div>
      </div>
     

      <div className='tab'>
      <span className='headings'>Education Details</span>
      <div className='details'>
      <div className='attribute'>
       <span className='static-text'>College*</span>
       <input className='input' name='college' value={state.college} onChange={handleFieldChange}/>
      </div>

      <div className='attribute'>
       <span className='static-text'>Course*</span>
       <input className='input' name='course' value={state.course} onChange={handleFieldChange}/>
      </div>

      <div className='attribute'>
       <span className='static-text'>Location*</span>
       <input className='input' name='location' value={state.location} onChange={handleFieldChange}/>
      </div>

      <div className='attribute'>
       <span className='static-text'>Start Date*</span>
       <input className='input' name='startDate' value={state.startDate} onChange={handleFieldChange}/>
      </div>

      <div className='attribute'>
       <span className='static-text'>End Date*</span>
       <input className='input' name='endDate' value={state.endDate} onChange={handleFieldChange}/>
      </div>
      </div>
      </div>

      <div className='tab'>
      <span className='headings'>Experience</span>
      <div className='details'>
      <div className='attribute'>
       <span className='static-text'>Current Company*</span>
       <input className='input' name='currentCompany' value={state.currentCompany} onChange={handleFieldChange}/>
      </div>

      <div className='attribute'>
       <span className='static-text'>Current Location*</span>
       <input className='input' name='currentLocation' value={state.currentLocation} onChange={handleFieldChange}/>
      </div>

      <div className='attribute'>
       <span className='static-text'>Total Experience*</span>
       <input className='input' name='totalExperience' value={state.totalExperience} onChange={handleFieldChange}/>
      </div>

      
      </div>
      <div className='attribute'>
      <span className='static-text'>Job-Description*</span>
      <textarea className='description' name='jobDescription' value={state.jobDescription} onChange={handleFieldChange}></textarea>
      </div>
      </div>

      <div className='tab'>
      <span className='headings'>Skills</span>
      <div className='attribute'>
      <span className='static-text'>Enter Your skills*</span>
      <textarea className='description' name='skills' value={state.skills} onChange={handleFieldChange}></textarea>
      </div>
      </div>


      </div>
      <div className='Save-button-container'>
      <button className='save-button' onClick={handleSaveDetails}>Save Details<img src={Save} ></img></button>
      </div>
      </div>

)}
      </div>
      
    );
}
export default Register