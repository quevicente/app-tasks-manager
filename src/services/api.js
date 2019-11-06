<<<<<<< HEAD
import axios from 'axios';

const api = axios.create({
    baseURL: `http://api-tasks-manager.herokuapp.coms`
})

export function getAllTasks(){
    return api.get(`/tarefa`)
=======
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-tasks-manager.herokuapp.com/'
})

export default request = (method, endpoint, data) =>{
  return api[method](endpoint, data)
    .then(response => (response))
    .catch(({response}) => response)
>>>>>>> upstream/master
}