import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Pane, Avatar, Heading,Text } from 'evergreen-ui'
import './Profile.css'
import AllPosts from './AllPosts'

const Profiles = ({match}) => {
    const [userInfo, setUserInfo] = useState("")
    const [posts, setPosts] = useState("")

    const getSingleUser = async () => {
        try {
            let response = await axios.get(`/api/writer/${match.params.id}`)
            setUserInfo(response.data.user)
            setPosts(response.data.posts)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSingleUser()
    }, [setPosts])

    return (
        <main className="profile-container">
        <Pane
        width="80%"
        border="default"
        display="flex"
        alignItems="center">
        <Avatar
            src={userInfo?.avatar}
            name={userInfo?.firstName+" "+userInfo?.lastName}
            size={140}
        />
        <section className="profile-info">
        <Heading size={600} marginBottom={10} > {userInfo?.firstName+" "+userInfo?.lastName}</Heading>
        <Text> {userInfo?.bio} </Text>
        </section>
        </Pane>
        <Pane
        width="80%"
        border="default">
            <Heading size={400} marginBottom={10} > Checkout their posts </Heading>
            {/* <div> POSTS HERE</div> */}
            {posts && <AllPosts posts={posts}/>}
        </Pane>
        </main>
    )
}

export default Profiles
