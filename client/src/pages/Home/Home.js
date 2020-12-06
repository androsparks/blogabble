import React from 'react'
import './Home.css'
import {Card, Paragraph, Small} from 'evergreen-ui'

const Home = () => {
    return (
        <>
        <h1> MY POSTS </h1> 
        <div className="allposts-container">
            <Card
              height={120}
              width={275}
              display="flex"
              flexDirection="column"
              alignItems="center"
              padding={2}
            //   justifyContent="center"
              border="default"> 
                <div className="card-header"> <h3>Sample Title </h3> <span className="card-date"> Updated: </span></div>
                <div className="card-content"> 
                <Paragraph>
                    Onec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
                    in pretium orci vestibulum eget. 
                </Paragraph> 
                <span className="card-comm"><Small> Number of Comments: </Small></span>
                </div>
            </Card>
        </div>
        </>
    )
}

export default Home
