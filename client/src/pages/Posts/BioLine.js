import React from 'react'
import { Avatar, Pane, Text } from 'evergreen-ui'

const BioLine = () => {
    return (
        <Pane
        height={30}
        display="flex"
        alignItems="center"
        marginTop={5}
        >
            <Avatar name="Jeroen Ransijn" size={25} marginRight={12} />
            <Text marginRight={12} size={300} > Place Holder Name </Text>
            <Text size={300} > Place Holder Date  </Text>
        </Pane>
    )
}

export default BioLine
