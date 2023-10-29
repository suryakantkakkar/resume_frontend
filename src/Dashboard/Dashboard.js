import React, { useState , useEffect} from 'react';
import Header from '../Header/Header';
import './Dashboard.css';
import Job from "../Icons/Job.jpg"

function Dashboard() {
    return (
      <div className='dashboard-container'>
      <Header></Header>
        <div className='dashboard-content'>

        <div className='sidebar'>
          <img src={Job} ></img>
        </div>

        <div className='span-head'>
            <span>Want a Job?</span>
            <span>Register You resume with Us.</span>
          </div>
        </div>

      </div>
    );
}
export default Dashboard