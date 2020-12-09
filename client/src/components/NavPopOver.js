import React, {useState, useContext} from 'react'
import { AppContext } from '../context/AppContext';
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom'
import {Popover, Pane, Text, Button, IconButton, MenuIcon, Card, LinkIcon} from 'evergreen-ui'

const NavPopOver = () => {
    const { setCurrentUser} = useContext(AppContext);
    const history = useHistory()

    const logOut = async () => {
        try {
            let response = await axios.post('/api/logout', {withCredentials: true})
            sessionStorage.removeItem('user')
            setCurrentUser(null)
            history.push('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Popover 
        content={
            <Pane
            width={240}
            height={250}
            display="flex"
            // alignItems="center"
            // justifyContent="center"
            flexDirection="column"
            >
            <Card
                backgroundColor="white"
                elevation={0}
                display="flex"
                flexDirection="column"
                padding={15}
            > 
            <Button is={Link} appearance="minimal" to={'/me/profile'}> Profile </Button>
            </Card>
            <Card
                backgroundColor="white"
                elevation={0}
                display="flex"
                flexDirection="column"
                padding={15}
            > 
            <Button is={Link} appearance="minimal" to={'/me/posts'}> Posts </Button>
            </Card>
            <Card
                backgroundColor="white"
                elevation={0}
                display="flex"
                flexDirection="column"
                padding={15}
            > 
            <Button is={Link} appearance="minimal" to={'/'} > Search </Button>
            </Card>
            <Card
                backgroundColor="white"
                elevation={0}
                display="flex"
                flexDirection="column"
                padding={15}
            > 
            <Button intent="danger" appearance="minimal" onClick={logOut}> Logout </Button>
            </Card>
            </Pane>
        }
        >
        <IconButton marginLeft="auto" appearance="minimal" icon={MenuIcon}/>
        </Popover>
    )
}

export default NavPopOver
