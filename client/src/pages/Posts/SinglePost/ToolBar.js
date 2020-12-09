import React from 'react'
import { IconButton, Pane, HeartIcon, CommentIcon, Text, TextareaField } from 'evergreen-ui'

const ToolBar = (props) => {
    return (
        <>
        <Pane
        height={30}
        display="flex"
        alignItems="center"
        >
            {/* Will return to flesh out this feature */}
            {/* <IconButton appearance="minimal" icon={HeartIcon} iconSize={15} /> */}
            {/* <Text marginRight={12}> 100 </Text> */}
            <IconButton appearance="minimal" icon={CommentIcon} iconSize={15} onClick={props.onClick} />
            <Text marginRight={5}> - Write a comment here</Text>
        </Pane>
        </>
    )
}

export default ToolBar
