import axios from 'axios';

export const getCurrentUser = function() {
    return axios.get('http://localhost:3005/auth/me/',{withCredentials: true})
        .then(res => {
            return res.data
                    }) 
}