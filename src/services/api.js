import axios from 'axios';

const api = axios.create({
    baseURL: `http://api-tasks-manager.herokuapp.coms`
})

export function getAllTasks(){
    return api.get(`/tarefa`)
}