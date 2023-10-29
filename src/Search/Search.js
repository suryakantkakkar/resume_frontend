import React, { useState , useEffect} from 'react';
import Header from '../Header/Header';
import {Tab, Tabs, TasbList, TabPanel, TabList} from "react-tabs"
import SearchIcon from "../Icons/SearchIcon.svg"
import { getResumeById } from '../Services/api-service'; 
import { getResumesByName } from '../Services/api-service'; 
import './Search.css';

function Search() {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resumeData, setResumeData] = useState([]); 
  const [resumeIdInput, setResumeIdInput] = useState('');
  const [firstNameInput, setfirstNameInput] = useState('');
  const [lastNameInput, setlastNameInput] = useState('');
  const [resume, setSelectedResume] = useState();

  const fetchResumeDetailsById = async (resumeId) => {
    try {
      const response = await getResumeById(resumeIdInput);
      if(response?.status==200)
      {
      setResumeData(response.data);
      }
    } catch (error) {
      setResumeData([]);
      console.error('Error fetching resume details:', error);
    }
  };

  const fetchResumeDetailsByName = async (name) => {
    try {
      const response = await getResumesByName(firstNameInput+'+'+lastNameInput);
      if(response?.status==200)
      {
      setResumeData(response.data);
      }
    } catch (error) {
      setResumeData([]);
      console.error('Error fetching resume details:', error);
    }
  };

 

  const toggleModal = (resume) => {
    setIsModalOpen(!isModalOpen);
    setSelectedResume(resume);
  };
    return (
      <div>
      <Header></Header>
      <div className={isModalOpen ? 'blurred-background' : ''}>
      <div  className="tabs-container">
      <Tabs selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)}>
      <TabList className="tabs-list" style={{ margin: 0, marginTop:"10px" , padding: 0 }}>
        <Tab className="tab-item">Search By Name</Tab>
        <Tab className="tab-item">Search By Resume Id</Tab>
      </TabList>
      <TabPanel className="tab-content">
      <div className='search-bar'>
        <div className='search-details'>
        <div>
        <span className='search-static-text'>First-name</span>
        <input className='search-input' value={firstNameInput} onChange={(e) => setfirstNameInput(e.target.value)}></input>
        </div>

        <div>
        <span className='search-static-text'>Last-name</span>
        <input className='search-input'  value={lastNameInput} onChange={(e) => setlastNameInput(e.target.value)}></input>
        </div>
        <button className='search-button' onClick={fetchResumeDetailsByName}>Retrieve Resume Details<img src={SearchIcon}></img></button>
        </div>
      </div>
      </TabPanel>
      <TabPanel className="tab-content">
      <div className='search-bar'>
        <div className='search-details'>
        <div>
        <span className='search-static-text'>Resume-Id</span>
        <input placeholder="Enter Your Resume ID" className="search-input" value={resumeIdInput} onChange={(e) => setResumeIdInput(e.target.value)}></input>
        </div>
        <button className='search-button' onClick={fetchResumeDetailsById}>Retrieve Resume Details<img src={SearchIcon}></img></button>
        </div>
      </div>
      </TabPanel>
    </Tabs>
    </div>


    <div className='resumes'>
          {resumeData.map((resume, index) => (
            <div className='resume-card' key={index}>
              <div className='resume-detail'>
                <span>Resume Id</span>
                <span>{resume.id}</span>
              </div>
              <div className='resume-detail'>
                <span>Name</span>
                <span>{resume.firstName} {resume.lastName}</span>
              </div>
              <div className='resume-detail'>
                <span>Current Company</span>
                <span>{resume.currentCompany}</span>
              </div>
              <div className='resume-detail'>
                <span>Experience</span>
                <span>{resume.totalExperience}</span>
              </div>
              <div className='view-button'>
                <button className='view-button' onClick={() => toggleModal(resume)}>View</button>
              </div>
            </div>
          ))}
        </div>
        </div>
        {isModalOpen && (
          <div>
            <div className="modal-container">
              <div className="modal">
              <div className='modal-data'>
                <span className='modal-heading'>{resume.firstName+" "+resume.lastName}</span>
                <span className='modal-detail'>Experience - {resume.totalExperience}</span>
                </div>
                <div className='modal-data'>
                <span className='modal-detail'>Mob.-{resume.mobile}</span>
                <span className='modal-detail'>Email-{resume.email}</span>
                </div>
                <span className='modal-heading'>Education</span>
                <div className='modal-data'>
                <span className='modal-detail'>{resume.college+"-"+resume.course}</span>
                <span className='modal-detail'>{resume.location+" "+resume.startDate+"-"+resume.endDate}</span>
                </div>
                <span className='modal-heading'>Current Job</span>

                <div className='modal-data'>
                <span className='modal-detail'>{resume.currentCompany}</span>
                <span className='modal-detail'>{resume.currentLocation}</span>
                </div>
                <span className='modal-detail'>{resume.jobDescription}</span>
                <span className='modal-heading'>Skills</span>
                <span className='modal-detail'>{resume.skills}</span>
                <button className="close-button" onClick={toggleModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      
    </div>
  );
}

export default Search;