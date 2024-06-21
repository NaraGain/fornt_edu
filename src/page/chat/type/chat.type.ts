
export interface userInstance {
    userid : string,
    username : string
    userInfoInstance : userInfoInstance
}

export interface userInfoInstance {
  infoid : string,
  profile_url : string,
}

export interface Messages {
    id: string,
    userId : string,
    groupId : string,
    content : string,
    userInstance: userInstance
}

export interface Group {
    id : string,
    name : string,
}

export interface ChatProps {
    user:userInstance   
}

