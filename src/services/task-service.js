import request from './api'

export const getTasks = async () => 
  await request('get', 'tarefa')