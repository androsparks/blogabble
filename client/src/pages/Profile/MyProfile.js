import React, {useState, useContext} from 'react'
import {Pane, Avatar, Heading,Text, FilePicker, Button, EditIcon } from 'evergreen-ui'
import './Profile.css'
import { AppContext } from '../../context/AppContext';
import EditProfile from './EditProfile'

const MyProfile = () => {
    const [change, setChange] = useState(false)
    const { currentUser, setCurrentUser } = useContext(AppContext);

    return (
        <main className="profile-container">
        <Pane
        width="80%"
        display="flex"
        alignItems="center">
        <section>
        <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
            name="Alan Turing"
            size={140}
        />
        {/* <form> */}
        {/* <input type="file" accept="image/*" />
            <button type="submit">Save Image</button> */}
            {/* <FilePicker
                width={100}
                marginBottom={32}
                onChange={files => console.log(files)}
                placeholder="Select the file here!"
            />
        </form> */}
        </section>
        <section className="profile-info">
        <Heading size={600} marginBottom={10} > FIRST NAME LAST NAME</Heading>
        <Text> My name is someone and I like to write about whatever </Text>
        <EditProfile />
        {/* <Button marginY={8} marginRight={12} iconBefore={EditIcon} width={80}>Edit</Button> */}
        </section>
        </Pane>
        <Pane
        width="80%"
        border="default">
            <Heading size={400} marginBottom={10} > Checkout their posts </Heading>
            <div> POSTS HERE</div>
        </Pane>
        </main>
    )
}

export default MyProfile
