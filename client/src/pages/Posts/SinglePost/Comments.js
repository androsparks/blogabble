import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import CommentCard from './CommentCard'
import AddComment from './AddComment'
import { AppContext } from '../../../context/AppContext';
import {SideSheet, Paragraph, Pane, Heading} from 'evergreen-ui'

const Comments = (props) => {
    // const [show, setShow] = useState(false)
    const [comments, setComments] = useState("")
    const { loading, setLoading } = useContext(AppContext);

    const getAllComments = async () => {
        try { 
            console.log(props.postID)
            let response = await axios.get(`/api/comments/post/${props.postID}`)
            setComments(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getAllComments()
    },[loading])
    return (
        <SideSheet isShown={props.show}
        onCloseComplete={props.onCloseComplete}
        >
        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white" >
        <Pane padding={16}>
            <Heading size={600}>Comments </Heading>
            <Paragraph size={400}>
            Add your comment below! 
            </Paragraph>
        </Pane>
        <AddComment postID={props.postID}/>
        </Pane>
        <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
            {comments && comments.map(obj => {
                return <CommentCard comment={obj.comment} date={obj.updatedAt} owner={obj.owner} />
            })}
            
        </Pane>
        </SideSheet>
    )
}

export default Comments
