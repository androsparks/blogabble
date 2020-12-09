import React, {useState,} from 'react'
import {Link } from 'react-router-dom'

import {Card, Paragraph, Small} from 'evergreen-ui'

const AllPosts= (props) => {
    const [posts, setPosts] = useState(props.posts)


    return (
        <main className="myposts-holder">
        {/* <h1> MY POSTS </h1>  */}
        <div className="allposts-container">
            {posts && posts.map((post) => {
                return <Link className="card-link" to={`/post/${post._id}`}><Card  
                height={120}
                width={275}
                display="flex"
                flexDirection="column"
                alignItems="center"
                padding={2}
                border="default"
                margin={10}
                > 
                 <div className="card-header"> <h3 className="card-title"> {post.title} </h3> <span className="card-date"> {post.updatedAt} </span></div>
                <div className="card-content"> 
                <Paragraph className="card-body">
                    {post.body}
                </Paragraph> 
                {/* <span className="card-comm"><Small> Number of Comments: </Small></span> */}
                </div>
                </Card>
                </Link>
            })}
        </div>
        </main>
    )
}

export default AllPosts
