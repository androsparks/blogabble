import React from 'react'
import {Card, Text, Paragraph, Avatar} from 'evergreen-ui'

const CommentCard = () => {
    return (
        <Card
            backgroundColor="white"
            elevation={0}
            height={240}
            display="flex"
            flexDirection="column"
            padding={15}
        >
        <section className="comment-header">
            <Avatar name="Jeroen Ransijn" size={35} marginRight={12} />
            <div className="comment-meta">
                <Text > FIRST NAME LAST NAME </Text> 
                <Text > 8 days ago </Text> 
            </div>
        </section>
        <Paragraph marginTop="default"> Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with</Paragraph>
      </Card>
    )
}

export default CommentCard
