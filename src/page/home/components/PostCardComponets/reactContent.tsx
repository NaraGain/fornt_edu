import { CommentOutlined, 
     HeartFilled, 
     HeartOutlined,
    SendOutlined, ShareAltOutlined } from "@ant-design/icons"
import {Form, Button} from "antd"
import React, { useContext, useEffect, useState, createContext, useReducer } from "react"
import { hightLike, likePost } from "../../../../api/feed"
import { UserContext } from "../../../../auth/ProtectedRoute"
import { Preview } from "../../../preview/preview"
import { useMutation, useQueryClient } from "react-query"
import { Link } from "react-router-dom"


type ReactContentProps = {
    pid?: string
}


interface newState {
    isModalOpen : boolean,
    postid : string,
}

type Action = |
{type : 'SHOW_MODAL&&HIDEMODAL'; payload:boolean} |
{type : 'GET_ADD'; payload:string} 




const initialState:newState = {
    isModalOpen : false,
    postid : '',
}

export const OpenModal = createContext<{
    state : newState,
    dispatch : React.Dispatch<Action>
}>({
    state: initialState,
    dispatch: () => null,
  });


const reducer = (state:newState, action:Action):newState => {
    switch (action.type) {
        case 'SHOW_MODAL&&HIDEMODAL':
          return { ...state, isModalOpen: action.payload };
        case "GET_ADD" :
            return {...state , postid: action.payload}

        default:
          return state;
      }
}


export const ReactContent:React.FC<ReactContentProps> =
 ({pid}:ReactContentProps)=>{

    const [CommentInput ,setCommentInpt] = useState(false)
    const username = localStorage.getItem('username')
    const user:any = useContext(UserContext)
    const [likeButton ,setLikeButton] = useState(false)
    const [state , dispatch] = useReducer(reducer, initialState)
    const queryClient = useQueryClient()

    
    const { mutate , isLoading} = useMutation(likePost , {
        onSuccess : (data) => {
                if(data.success){
                    setLikeButton(true)
                }else{
                    setLikeButton(false)
                }
                queryClient.invalidateQueries(['likeAndCommentCount'])
                queryClient.invalidateQueries(['userLike'])
        },
        onError: (error) => {
            // Handle error case
            console.error("Error liking the post:", error);
            setLikeButton(false);
        }
    })
   
    const handleShow = () => {
        dispatch({type:'SHOW_MODAL&&HIDEMODAL' , payload:true})
        dispatch({type : 'GET_ADD', payload: pid as string})
      }

 
    const highLightLike = async () =>{
        try {
            const response = await hightLike({
                userid : user?.userid,
                postid : pid,
            })
            if(response.success){
                setLikeButton(response.result)
            }else{
                setLikeButton(response.result)
            }
        } catch (error) {
            alert(error)
        }
    }
  
    const likeActionPost =  () => {
        try {
            mutate({
                postid : pid,
                username : username
            })
        } catch (error) {
            alert(error)
        }        
    }

    useEffect(()=> {
       
        highLightLike()

    }, [user, state])

    return <><OpenModal.Provider
        value={{state , dispatch}}>
        <div className="flex
     gap-3  md:px-0  justify-between">
        <ul className="flex gap-3  items-center 
         text-[20px]
          dark:text-neutral-300 text-neutral-800">
            <li className="inline-flex">
            <button onClick={likeActionPost} className="inline-flex
                active:bg-neutral-50
                    rounded-md
                 dark:active:bg-slate-700
                  gap-2 items-center">
                    {
                        likeButton ? <HeartFilled className="text-red-400"/> :
                <HeartOutlined/>
                    }
                </button>
                <p className="text-[14px]"></p>
                </li>
            <li className="inline-flex">

                <Link to={`/pv?post=${pid}`} onClick={handleShow}  className="inline-flex gap-2
                    dark:active:bg-slate-700 
                    items-center
                    rounded-md
                 active:bg-neutral-50">
                <CommentOutlined></CommentOutlined>
                </Link>
                </li>

            <li className="inline-flex">
                <button className="inline-flex
                active:bg-neutral-50
                    rounded-md
                 dark:active:bg-slate-700
                  gap-2 items-center">
                <ShareAltOutlined/>
                </button>
                </li>
        </ul>   
    </div>
   
    {
        CommentInput ? 
        <div className="px-4 w-full">
        <Form className="flex gap-2 items-center">
            <Form.Item className="w-full">
            <input className="border-b w-full outline-none" 
            placeholder="add comment"/>
        </Form.Item>
        <Form.Item>
            <Button 
            onClick={()=>alert(pid)}
            className="border-none shadow-none"
             icon={<SendOutlined/>}>
            </Button>
        </Form.Item>
        </Form>
        </div>  : <></>
}
    </OpenModal.Provider>
    </>
}

