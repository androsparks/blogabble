import React, {useState, useEffect} from 'react'
import './Posts.css'
import axios from 'axios'
import BioLine from './BioLine'
import ToolBar from './ToolBar'
import Comments from './Comments'
import { Pane, Text, Heading, Paragraph } from 'evergreen-ui'


const Posts = ({match}) => {
    const [show, setShow] = useState(false)
    const [post, setPost] = useState("")
    const [writer, setWriter] = useState("")

    const onCloseComplete= () => {
        setShow(false)
    }

    const onClick = () => {
        setShow(true)
    }

    const getSinglePost = async () => {
        try {
            let response = await axios.get(`/api/posts/${match.params.id}`, {withCredentials: true})
            setPost(response.data.post)
            setWriter(response.data.writer)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSinglePost()
    }, [])
    return (
        <div className="post-container">
            <Heading size={900} is="h1" marginTop="default" fontFamily='Castoro'>{post?.title}</Heading>
            <Text size={500}  marginTop="default"> {post?.subtitle} </Text>
            <BioLine  marginTop="default" name={writer?.firstName+" "+writer?.lastName} date={post?.updatedAt} avatar={writer?.avatar} />
            <Paragraph size={300} marginTop="default">{post?.body}</Paragraph>
            <ToolBar onClick={onClick}  marginTop="default" />
            <Comments show={show} onCloseComplete={onCloseComplete} postID={match.params.id} />
        </div>
    )
}

export default Posts
