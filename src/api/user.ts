import { axiosInstance, baseReactQueryInstance } from "."

export const login = async (payload:any) =>{
    try {
        const response = await axiosInstance.post('api/v1/user/login', payload)
        return response.data
    } catch (error:any
        ) {
        return error.response.data
    }
}


export const registerUser = async (payload:any) => {
    try {
         const response = await axiosInstance.post(`api/v1/user/`, payload)
         return response.data
    } catch (error:any) {
        return error.response      
    }
}

export const userSearch = async (payload:any):Promise<any> => {
    try {
        const response = await baseReactQueryInstance.get(`/user/find?search=${payload.username}`)
        return response.data
    } catch (error:any) {
        return error.response.data
    }
}

export const userProfile = async (payload:any):Promise<any> => {
    try {
        const response = await baseReactQueryInstance.post(`user/profiles`, payload)
        return response.data
    } catch (error:any) {
        return error.response.data
    }
}

export const changeProfile = async (paylaod:any):Promise<any> => {
    try {
        const response = await baseReactQueryInstance.post(`user/changeProfile`, paylaod)
        return response.data
    } catch (error) {
        return error
    }
}

export const userFeed = async (payload:any)=>{
    try {
        const response = await baseReactQueryInstance.post(`post/userfeed` , payload)
        return response.data
    } catch (error:any) {
        return error.response.data
    }
}

export const upldateUserInfo = async (payload:any)=>{
    try {
        const response = await baseReactQueryInstance.post(`user/update`, payload)
        return response.data
    } catch (error:any) {
        return error.response
    }
}

export const userFile = async (payload:any) => {
    try {
        const response = await baseReactQueryInstance.post(`user/userFile`, payload)
        return response?.data
    } catch (error:any) {
        return error?.response?.data
    }
}

export const updateUserBio = async (payload:any):Promise<any> => {
    try {
        const response = await axiosInstance.post(`api/v1/user/userInfo`, payload)
        return response
    } catch (error:any) {
        return error.response
    }
}


export const makeFriend = async (payload:any):Promise<any> => {
    try {
        const response = await baseReactQueryInstance.post(`friend/create`, payload)
        return response.data
    } catch (error) {
        return error
    }
}

export const removeFriend = async (payload:any):Promise<any> => {
    try {
        const response = await baseReactQueryInstance.post(`friend/remove`, payload)
        return response?.data
    } catch (error:any) {
        return error?.response?.data
    }
}

export const countTotalFriend = async(payload:any):Promise<any> =>{
    try {
        const response = baseReactQueryInstance.post(`friend/getCount`, payload)
        return (await response).data
    } catch (error) {
        return error
    }
}