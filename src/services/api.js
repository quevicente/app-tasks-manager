import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api-tasks-manager.herokuapp.com/'
})

export default request = (method, endpoint) =>{
  return api[method](endpoint)
    .then(response => (response))
    .catch(({response}) => response)
}