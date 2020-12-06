import React from 'react'
import './Navigation.css'
import {Link} from 'react-router-dom'
import {Pane, Tablist, Tab, Paragraph, Heading, Text} from 'evergreen-ui'
import NavPopOver from './NavPopOver'

const NavigationBar = () => {

    return (
    <Pane height={35}
    paddingBottom={5}
    display="flex"
    alignItems="center"
    borderBottom="default"
    backgroundColor="white">
            <h3 className="nav-logo">WEBSITENAME </h3>
            <NavPopOver/>    
        </Pane>

    )
}

export default NavigationBar
