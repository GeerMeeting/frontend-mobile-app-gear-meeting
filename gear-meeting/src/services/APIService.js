import axios from 'axios';

export const BASE_URL = 'https://wapp-api-gear-meeting.azurewebsites.net';

class API {
  static async get(path, token) {
    try {
      const response = await axios.get(`${BASE_URL}${path}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        }
      });
      return response;
    } catch (error) {
      if(error.message === 'Network Error'){
        return console.error('Erro interno de servidor')
      } else {
        return console.error('ERRO : ', error)
      }
    }
  }

  static async getImage(path, token) {
    try {
      const response = await axios.get(`${BASE_URL}${path}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
        responseType: 'blob'
      });
      return response;
    } catch (error) {
      if(error.message === 'Network Error'){
        return console.error('Erro interno de servidor')
      } else {
        console.error('ERRO: ', error)
        return error;
      }
    }
  }

  static async post(path, body, callback, token) {
    try {
      const response = await axios.post(`${BASE_URL}${path}`, body, {
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
      const response = await axios.post(`${BASE_URL}/login`, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      callback(null, response);
    } catch (error) {
      console.log(error)
      callback(error, null);
    }
  }
}

export default API;