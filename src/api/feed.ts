import { axiosInstance, baseReactQueryInstance } from "."
import { Page, result } from "../page/home/home"





export const publicFeed = async ():Promise<any> =>{
    try {
        const response = await axiosInstance.get('api/v1/post')
        return response?.data
    } catch (error:any) {
       return error
    }
}

export const TestQueryPublicFeedWithReactQuest = async ({pageParam = 1}:{pageParam?: number}):Promise<Page<result>> => {
    try {
        const response = await baseReactQueryInstance.get<Page<result>>(`/post?page=${pageParam}&limit=4`)     
        return response.data 
    } catch (error:any) {
        return error
    }
  
}

export const createFeed = async(payload:any):Promise<any> =>{
    try {
        const response = await axiosInstance.post('api/v1/post', payload)
        return response.data
    } catch (error:any) {
        return error
    }
}

export const createUploadFeed = async (payload:any):Promise<any> => {
    try {
        const respsonse = await baseReactQueryInstance.post(`post/upload`, payload)
        return respsonse.data
    } catch (error) {
        return error
    }
}

export const createFeedWithFile = async(payload:any): Promise<any> => {
    try {
        const response = await axiosInstance.post(`api/v1/post/upload`, payload)
        return response.data
    } catch (error:any) {
        return error
    }
}


export const deleteFeed = async(payload:any):Promise<any> => {
    try {
        const response = await axiosInstance.post('api/v1/post/delete', payload)
        return response.data
    } catch (error:any) {
        return error
    }
}

export const getPostOne = async (payload:any):Promise<any> => {
    try {
        const response = await axiosInstance.post(`api/v1/post/findOne`, payload)
        return response.data
    } catch (error:any) {
        return error
    }
}

export const createCommentPost = async (payload:any):Promise<any> => {
    try {
        const response = await axiosInstance.post(`api/v1/comment/create`, payload)
        return response.data
    } catch (error:any) {
        return error
    }
}

export const getcommentPost = async (payload:any):Promise<any> => {
    try {
        const response = await axiosInstance.post(`api/v1/comment/findComment`,payload)
        return response.data
    } catch (error:any) {
        return error
    }
}


export const deleteComment = async (payload:any):Promise<any> => {
    try {
        const response = await axiosInstance.post(`api/v1/comment/deleteComment`, payload)
        return response.data
    } catch (error:any) {
        return error
    }
}

export const likePost = async (payload:any): Promise<any> => {
    try {
        const response = await axiosInstance.post(`api/v1/like/create`, payload)
        return response.data
    } catch (error:any) {
        return error
    }
}

export const hightLike = async (payload:any):Promise<any> => {
    try {
        const response = await axiosInstance.post(`api/v1/like/highlight`, payload)
        return response.data
    } catch (error) {
        return error
    }
}

export const countLikeAndComment = async (payload:{postid : string}): Promise<any> => {
    try {
        const response = await baseReactQueryInstance.get(`/like/count/${payload.postid}`,)
        return response.data
    } catch (error:any) {
        return error
    }
}

export const findAllUserLikePost = async (postid:string) => {
        try {
            const response = await axiosInstance.get(`api/v1/like/${postid}`)
        return response.data
        } catch (error:any) {
            return error
        }
}