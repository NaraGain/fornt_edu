import { baseReactQueryInstance } from "."

export const GetFriend = async (paylaod:any) => {
     try {
        const repsonse = await baseReactQueryInstance.post(`friend/userFriend`, paylaod)
        return repsonse.data
     } catch (error) {
        return false
     }
}