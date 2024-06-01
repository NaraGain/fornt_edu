
export interface IUser {
  userid : string,
  username : string,
  email? : string,
  profile_url? : string,
  user: object,
  loading : boolean
}

export type UserContextType = {
    users : IUser,
    getUser : (user:IUser) => void
}

export type userAction = 
|{type: "GET_USER" , payload: IUser} | { type : "LOADING_USER", payload : boolean}

