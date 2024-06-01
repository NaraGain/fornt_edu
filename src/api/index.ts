import axios from 'axios'

const token = localStorage.getItem('TOKEN')
export const axiosInstance = axios.create({
    baseURL : process.env.REACT_APP_API_ENDPOINT,
    headers : {
        authorization : `Beare ${token}`
    }
})



export const baseReactQueryInstance = axios.create({
    baseURL : `${process.env.REACT_APP_API_ENDPOINT}api/v1`,
    headers : {
        authorization : `Beare ${token}`
    }
})




