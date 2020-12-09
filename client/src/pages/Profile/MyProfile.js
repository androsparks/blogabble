import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {Pane, Avatar, Heading,Text, Button } from 'evergreen-ui'
import './Profile.css'

import { AppContext } from '../../context/AppContext';
import EditProfile from './EditProfile'
import AllPosts from './AllPosts'

const MyProfile = ({history}) => {
    const [change, setChange] = useState(false)
    const [posts, setPosts] = useState("")
    const { currentUser, setCurrentUser, setLoading, loading } = useContext(AppContext);

    useEffect(() => {
        getMyPosts()
    }, [setPosts])

    const getMyPosts = async () => {
        try {
            let response = await axios.get('/api/posts', { withCredentials: true })
            setPosts(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteMe = async () => {
        try {
            let response = await axios.delete(`/api/me`, { withCredentials: true })
            setLoading(!loading)
            setCurrentUser(null)
            history.push('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="profile-container">
        <h1> YOUR PROFILE </h1>
        <Pane
        width="80%"
        display="flex"
        alignItems="center">
        <section>
        <Avatar
            src={currentUser?.avatar}
            name="Alan Turing"
            size={140}
        />
        </section>
        <section className="profile-info">
        <Heading size={600} marginBottom={10} > {currentUser?.firstName} {currentUser?.lastName}</Heading>
        <Text> {currentUser?.bio} </Text>
        <Pane>
        <EditProfile />
        <Button onClick={deleteMe} intent="danger"> DELETE</Button>
        </Pane>
        </section>
        </Pane>
        <Pane
        width="80%"
        border="default">
            <Heading size={400} marginBottom={10} marginTop={10} > Your posts are below, click on a post to edit it </Heading>
            {posts && <AllPosts posts={posts}/>}
        </Pane>
        </main>
    )
}

export default MyProfile
