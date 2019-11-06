import request from './api'

export const getTasks = async () => 
  await request('get', 'tarefa')

export const createTask = async task => 
  await request('post', 'tarefa', task)

export const updateTask = async (id, task) => 
  await request('put', `tarefa/${id}`, task)

export const removeTask = async id => 
  await request('delete', `tarefa/${id}`)
