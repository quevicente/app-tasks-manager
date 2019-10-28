import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-tasks-manager.herokuapp.com/'
})

export const request = (method, endpoint, data) =>{
  return api[method](endpoint, data).then(response => response)
}