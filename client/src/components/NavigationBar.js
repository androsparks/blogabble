import React, {useState, useContext} from 'react'
import { AppContext } from '../context/AppContext';
import './Navigation.css'
import {Link} from 'react-router-dom'
import {Pane, Tablist, Tab, Paragraph, Heading, Text, Button} from 'evergreen-ui'
import NavPopOver from './NavPopOver'

const NavigationBar = () => {
    const [show, setShow] = useState("")
    const { setCurrentUser, currentUser } = useContext(AppContext);

    return (
        <Pane 
        height={50}
        padding={5}
        display="flex"
        alignItems="center"
        borderBottom="default"
        backgroundColor="white">
            <Link className="nav-logo" to='/'> <h3 > BLOGGABLE </h3> </Link> 
            {currentUser && <NavPopOver/> }
            {!currentUser && <Button marginLeft="auto" is={Link} to={'/login'}appearance="minimal"> Login </Button>}
               
        </Pane>
    )
}

export default NavigationBar
