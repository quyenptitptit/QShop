import axios from '../../src/axios'

const handleLoginApi = (username, password) => {
    return axios.post('/api/login', {username, password})
}

export default handleLoginApi