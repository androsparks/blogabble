import React from 'react'
import {Card, Text, Paragraph, Avatar} from 'evergreen-ui'

const CommentCard = (props) => {
    return (
        <Card
            backgroundColor="white"
            elevation={0}
            height={"auto"}
            display="flex"
            flexDirection="column"
            padding={15}
            margin={10}
        >
        <section className="comment-header">
            <Avatar name={props.owner} size={35} marginRight={12} />
            <div className="comment-meta">
                <Text > {props.owner || 'Anonymous'} </Text> 
                <Text > {props.date} </Text> 
            </div>
        </section>
    <Paragraph marginTop="default"> {props.comment}</Paragraph>
      </Card>
    )
}

export default CommentCard
