// Core
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json'
  },
  params: {
    // TODO: move to .env
    api_key: '2022e966ca64bb6dcb521d7e854d7857'
  }
})

export default instance
