import React, {useState} from 'react'
import CommentCard from './CommentCard'
import {SideSheet, Paragraph, Pane, Heading,Card} from 'evergreen-ui'

const Comments = (props) => {
    // const [show, setShow] = useState(false)
    return (
        <SideSheet isShown={props.show}
        onCloseComplete={props.onCloseComplete}
        >
        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
        <Pane padding={16}>
            <Heading size={600}>Comments </Heading>
            <Paragraph size={400}>
            Optional description or sub title
            </Paragraph>
        </Pane>
        </Pane>

        <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
            <CommentCard />
        </Pane>
        </SideSheet>
    )
}

export default Comments
