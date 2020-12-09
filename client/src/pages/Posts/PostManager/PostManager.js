import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './PostManager.css'
import {Pane, Small, Button, IconButton, EyeOpenIcon} from 'evergreen-ui'
import { AppContext } from '../../../context/AppContext';

const PostManager = () => {
    const { loading, setLoading } = useContext(AppContext);
    const [posts, setPosts] = useState("")
    const getMyPosts = async () => {
        try {
            let response = await axios.get('/api/posts', { withCredentials: true })
            console.log(response.data)
            setPosts(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const deletePost = async (postID) => {
        try {
            let response = await axios.delete(`/api/posts/${postID}`, { withCredentials: true })
            setLoading(!loading)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getMyPosts()
    }, [loading])

    return (
        <main className="post-manager-holder">
        <h1> MY POSTS </h1> 
        <Small> Scroll through your posts, edit, or delete them! </Small> 
        <Link to={`/me/post/new`}> <Button> Create a New Post </Button> </Link>
        <div className="post-list-container">
            {posts && posts.map((post) => {
                return <Pane  
                width={500}
                display="flex"
                alignItems="center"
                padding={2}
                border="default"
                margin={10}
                > 
                <h3 className="pm-card-title mS"> {post.title} </h3> 
                <div className="pm-card-content"> 
                <h3 className="card-date mS"> {post.updatedAt} </h3>
                <Link to={`/post/${post._id}`}> <IconButton className="mS" icon={EyeOpenIcon} /> </Link>
                <Link to={`/me/update/${post._id}`}> <Button className="mS"> UPDATE </Button> </Link>
                <Button className="mS" onClick={()=> deletePost(post._id)}> DELETE </Button>
                </div>
                </Pane>
            })}
        </div>
        </main>
    )
}

export default PostManager
