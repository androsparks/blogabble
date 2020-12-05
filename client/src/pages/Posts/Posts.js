import React, {useState} from 'react'
import './Posts.css'
import BioLine from './BioLine'
import ToolBar from './ToolBar'
import Comments from './Comments'
import { Pane, Text, Heading, Paragraph } from 'evergreen-ui'


const Posts = () => {
    const [show, setShow] = useState(false)

    const onCloseComplete= () => {
        setShow(false)
    }

    const onClick = () => {
        setShow(true)
    }
    return (
        <div className="post-container">
            <Heading size={800} marginTop="default">I AM A BLOG POST TITLE</Heading>
            <Text size={500}  marginTop="default"> Placeholder for Subtitle </Text>
            <BioLine  marginTop="default" />
            <Paragraph size={300} marginTop="default">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
            <ToolBar onClick={onClick}  marginTop="default" />
            <Comments show={show} onCloseComplete={onCloseComplete} />
        </div>
    )
}

export default Posts
