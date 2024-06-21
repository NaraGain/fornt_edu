import { baseReactQueryInstance } from "."

export const GetFriend = async (paylaod:any) => {
     try {
        const repsonse = await baseReactQueryInstance.post(`friend/userFriend`, paylaod)
        return repsonse.data
     } catch (error) {
        return false
     }
}


export const acceptedFriend = async (payload:any) => {
   try {
      const response = await baseReactQueryInstance.post(`friend/acceptedFriend`, payload)
      return response.data
   } catch (error:any) {
      return error.response.data
   }
}

export const userContact = async (payload:any) => {
   try {
      const response = await baseReactQueryInstance.post(`friend/contact`, payload)
      return response.data
   } catch (error:any) {
      return error.response.data
   }
}