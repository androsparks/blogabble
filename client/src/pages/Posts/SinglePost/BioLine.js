import React from 'react'
import { Avatar, Pane, Text } from 'evergreen-ui'

const BioLine = (props) => {
    return (
        <Pane
        height={30}
        display="flex"
        alignItems="center"
        marginTop={5}
        >
            <Avatar name={props.name} src={props.avatar} size={25} marginRight={12} />
            <Text marginRight={12} size={300} > {props.name} </Text>
            <Text size={300} > {props.date}  </Text>
        </Pane>
    )
}

export default BioLine
