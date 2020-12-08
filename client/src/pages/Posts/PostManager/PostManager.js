import React from 'react'
import {Pane, Paragraph, Small, Button} from 'evergreen-ui'

const PostManager = () => {
    const { currentUser, setCurrentUser } = useContext(AppContext);
    const [posts, setPosts] = useState("")
    const getMyPosts = async () => {
        try {
            let response = await axios.get('/api/posts', { withCredentials: true })
            console.log(response.data)
            setPosts(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMyPosts()
    }, [])

    return (
        <main className="post-manager-holder">
        <h1> MY POSTS </h1> 
        <div className="post-list-container">
            <Small> Scroll through your posts, edit, or delete them! </Small> 
            <Button> Create New Account </Button>
            {posts && posts.map((post) => {
                return 
                <Pane  
                height={120}
                width={275}
                display="flex"
                padding={2}
                border="default"
                margin={10}
                > 
                 {/* <div className="card-header">  */}
                <h3 className="card-title"> {post.title} </h3> 
                <h3 className="card-date"> {post.updatedAt} </h3>
                 {/* </div> */}
                {/* <div className="card-content">  */}
                <Button> UPDATE </Button>
                <Button> DELETE </Button>
                {/* <span className="card-comm"><Small> Number of Comments: </Small></span> */}
                {/* </div> */}
                </Pane>
            })}
        </div>
        </main>
    )
}

export default PostManager
