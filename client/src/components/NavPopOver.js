import React from 'react'
import {Link} from 'react-router-dom'
import {Popover, Pane, Text, Button, IconButton, MenuIcon, Card} from 'evergreen-ui'

const NavPopOver = () => {
    return (
        <Popover 
        content={
            <Pane
            width={240}
            height={205}
            display="flex"
            // alignItems="center"
            // justifyContent="center"
            flexDirection="column"
            >
            {/* <Text>PopoverContent</Text> */}
            <Card
                backgroundColor="white"
                elevation={0}
                display="flex"
                flexDirection="column"
                padding={15}
            > 
            <Link to={'/profile/me'}> Profile </Link>
            </Card>
            <Card
                backgroundColor="white"
                elevation={0}
                display="flex"
                flexDirection="column"
                padding={15}
            > 
            <Link to={'/posts/me'}> Posts </Link>
            </Card>
            <Card
                backgroundColor="white"
                elevation={0}
                display="flex"
                flexDirection="column"
                padding={15}
            > 
            <Link to={'/'}> Dashboard </Link>
            </Card>
            <Card
                backgroundColor="white"
                elevation={0}
                display="flex"
                flexDirection="column"
                padding={15}
            > 
            <Text> Logout </Text>
            </Card>
            </Pane>
        }
        >
        <IconButton marginLeft="auto" appearance="minimal" icon={MenuIcon}/>
        </Popover>
    )
}

export default NavPopOver
