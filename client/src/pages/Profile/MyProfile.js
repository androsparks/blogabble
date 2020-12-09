import React, {useState, useContext} from 'react'
import {Pane, Avatar, Heading,Text, FilePicker, Button, EditIcon } from 'evergreen-ui'
import './Profile.css'

import { AppContext } from '../../context/AppContext';
import EditProfile from './EditProfile'
import AllPosts from './AllPosts'

const MyProfile = () => {
    const [change, setChange] = useState(false)
    const { currentUser, setCurrentUser } = useContext(AppContext);


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
        <EditProfile />
        </section>
        </Pane>
        <Pane
        width="80%"
        border="default">
            <Heading size={400} marginBottom={10} marginTop={10} > Your posts are below, click on a post to edit it </Heading>
            <AllPosts />
        </Pane>
        </main>
    )
}

export default MyProfile
