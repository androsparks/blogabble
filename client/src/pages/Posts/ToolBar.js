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
            <IconButton appearance="minimal" icon={HeartIcon} iconSize={15} />
            <Text marginRight={12}> 100 </Text>
            <IconButton appearance="minimal" icon={CommentIcon} iconSize={15} onClick={props.onClick} />
            <Text marginRight={5}> 100 </Text>
            {/* <HeartIcon marginRight={5} /> <Text marginRight={12}> 100 </Text>
            <CommentIcon marginRight={5} /> <Text> 100 </Text> */}
        </Pane>
        {/* <TextareaField
            label="Default textarea field"
            description="This is a description."
            placeholder="Placeholder text"
        /> */}
        </>
    )
}

export default ToolBar
