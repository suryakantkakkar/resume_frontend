import axios from 'axios';
const API_URL = 'http://localhost:8080/api';

export const uploadResume = async (resumeData) => {
    try {
      const response = await axios.post(`${API_URL}/uploadResumeDetails`, resumeData);
      return response;
    } catch (error) {
      throw error;
    }
  };

  export const getResumeById = async (resumeId) => {
    try {
      const response = await axios.get(`${API_URL}/getResumeById/${resumeId}`);
      return response;
    } catch (error) {
      throw error;
    }
  };

  export const getResumesByName = async (name) => {
    try {
      const response = await axios.get(`${API_URL}/getResumeByName/${name}`);
      return response;
    } catch (error) {
      throw error;
    }
  };


