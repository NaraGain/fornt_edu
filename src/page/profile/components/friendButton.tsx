import React, { useContext } from "react"
import { UserContext } from "../../../auth/ProtectedRoute"
import { ProfileContext } from "../profile"
import { Button } from "antd"
import { CheckCircleOutlined, EditOutlined, ShareAltOutlined, UserAddOutlined, UserDeleteOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { useMutation, useQueryClient } from "react-query"
import { makeFriend, removeFriend } from "../../../api/user"
import { acceptedFriend } from "../../../api/friend"

interface FriendButtonProps  {
    isFollowing? : boolean,
    isFollower? : boolean,
    isFriend? :boolean,
}


const FollowButton = () => {
    const authUser:any = useContext(UserContext)
    const {data:currentUser} = useContext(ProfileContext)
    const queryClient = useQueryClient()
    const {mutate , isLoading} = useMutation(makeFriend , {
        onSuccess:(data)=>{
            if(!data.success){
             alert(data.message)   
            }else{
                queryClient.invalidateQueries(['friendCount'])
            }
        },
        onError:(error)=>{
            alert(`there was an error operation`)
        }
    })

    const handleFollow = async () =>{
        try {
            await mutate({
                userid1 : authUser?.userid,
                userid2: currentUser?.userid
            })
        } catch (error) {
            alert(`error`)
        }
    }

    return <React.Fragment>
        <Button
    loading={isLoading}
    onClick={handleFollow}
    icon={<UserAddOutlined/>}
    className="dark:bg-cyan-600
     bg-slate-800 rounded-md
     text-white
      dark:text-white border-none 
        ">
        Follow
    </Button>
    </React.Fragment>
}


const RemoveButton = () => {
    const queryClient = useQueryClient()
    const authUser:any = useContext(UserContext)
    const {data:currentUser} = useContext(ProfileContext)
    const {isLoading,  mutate} = useMutation(removeFriend, {
        onSuccess:(data:any)=>{
            if(!data.success){
             alert(data.message
             )   
            }else{
                queryClient.invalidateQueries(['friendCount'])  
            }
            console.log(data)
        },
        onError:(error)=>{
            alert(`there was an error operation`)
        }
    })

    const handleRemove = async () => {
        try {
            await mutate({
                type : "Receiver",
                Receiver : currentUser?.userid,
                Initiator : authUser?.userid
            })
        } catch (error) {
            alert(`error unfollowing`)
        }
    }

   

    

    return <><Button
    loading={isLoading}
    onClick={handleRemove}>
        Remove</Button>
        </>
}

const AcceptButton = () => {
    const queryClient = useQueryClient()
    const authUser:any = useContext(UserContext)
    const {data:currentUser} = useContext(ProfileContext)

    const {mutate:AcceptMutate , isLoading:AcceptLoading} = useMutation(acceptedFriend, {
        onSuccess : (data:any) => {
            if(!data.success){
                alert(data.message
                )   
               }else{
                   queryClient.invalidateQueries(['friendCount'])  
               }
        },
        onError:(error)=>{
            alert(`there was an error operation`)
        }
    })


    const handleAccepted = async () => {
        try {
            await AcceptMutate({
                receiverId : authUser?.userid,
                requesterId : currentUser?.userid
            })
        } catch (error) {
            alert(`error unfollowing`)
        }
    }
    return <>
    <Button
        loading={AcceptLoading}
        onClick={handleAccepted}>
            Accept
        </Button>
    </>
}

const UnfollowingButton = () => {
    const authUser:any = useContext(UserContext)
    const {data:currentUser} = useContext(ProfileContext)
    const queryClient = useQueryClient()
    const {mutate ,isLoading} = useMutation(removeFriend,{
        onSuccess:(data:any)=>{
            if(data.success){
                queryClient.invalidateQueries(['friendCount'])
            }else{
                alert(data.message)
            }
        },
        onError:(error)=>{
            alert(`there was an error operation`)
        }
    })

    const handleUnfollowing = async () => {
        try {
            await mutate({
                type : "Initiator",
                Receiver : currentUser?.userid,
                Initiator : authUser?.userid
            })
        } catch (error) {
            alert(`error unfollowing`)
        }
    }

    return <React.Fragment>
    <Button
    onClick={handleUnfollowing}
    loading={isLoading}
    className="dark:bg-cyan-600
    bg-slate-800 rounded-md
    text-white
     dark:text-white border-none"
    icon={<UserDeleteOutlined/>}>
        Unfollowing
    </Button>
    </React.Fragment>
}

const EditProfileButtin = () => {
    const navigate = useNavigate()
    const authUser:any = useContext(UserContext)
    const {data:currentUser} = useContext(ProfileContext)
    return <React.Fragment>
        {
            currentUser?.userid !== authUser?.userid ? <></> :
        <Button
    onClick={()=> navigate(`/u?name=${authUser?.username}`)}
    className="dark:bg-cyan-600
    bg-slate-800 rounded-md
    text-white
     dark:text-white border-none "
    icon={<EditOutlined/>}
    >
        Edit Profile
    </Button> 
}
    </React.Fragment>
}

const ShareProfileButton = () => {
    return <Button icon={<ShareAltOutlined/>} disabled>
    Share Profile
</Button>
}

export const FriendButton:React.FC<FriendButtonProps> = 
({isFollowing=false ,isFriend=false, isFollower=false}) => {
    const authUser:any = useContext(UserContext)
    const {data:currentUser} = useContext(ProfileContext)
 

    return <div className="flex gap-3 md:px-4 py-5">
    {
    authUser?.userid !== currentUser?.userid ? <>
    {
        isFollowing && <UnfollowingButton/> } 

    {
        !isFriend && <AcceptButton/>
    }        
    {
        isFollower && <RemoveButton/>
    }
   
    {
        isFriend && <> <RemoveButton/> <Button icon={<CheckCircleOutlined/>}>Friend</Button> <Button>Block</Button> </>
    }

    {
        !isFollowing && !isFollower && !isFriend && <FollowButton/>
    }
    </> : <>
    <EditProfileButtin/>
    </> 
    }
    <ShareProfileButton/>
    
    </div>
}