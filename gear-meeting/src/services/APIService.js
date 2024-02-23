import axios from 'axios';

export const BASE_URL = 'http://localhost';
export const _PORT = 8080;

class API {
  static async get(path, callback, token) {
    try {
      const response = await axios.get(`${BASE_URL}:${_PORT}${path}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      });
      callback(null, response);
    } catch (error) {
      if(error.message === 'Network Error'){
        console.error('Erro interno de servidor')
      } else {
        callback(error.response.data, null);
      }
    }
  }

  static async post(path, body, callback, token) {
    try {
      const response = await axios.post(`${BASE_URL}:${_PORT}${path}`, body, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      });
      callback(null, response);
    } catch (error) {
      if(error.message === 'Network Error'){
        console.error('Erro interno de servidor')
      } else {
        callback(error, null);
      }
    }
  }

  static async login(username, password, callback) {
    const body = {
      email: username.toLowerCase(),
      password: password
    }
    try {
      const response = await axios.post(`${BASE_URL}:${_PORT}/login`, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      callback(null, response);
    } catch (error) {
      callback(error, null);
    }
  }
}

export default API;