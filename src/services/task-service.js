import request from './api'

export const getTasks = async () => 
  await request('get', 'tarefa')

export const createTask = async task => 
  await request('post', 'tarefa', task)