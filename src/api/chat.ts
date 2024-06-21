import { baseReactQueryInstance } from "."


export const getChat = async (payload:any) => {
    try {
        const response = await baseReactQueryInstance.post('group/conversation', payload)
        return response.data
    } catch (error:any) {
        return false
    }
}