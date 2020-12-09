import React, {useState, useEffect, useContext} from 'react'
import { Pane, TextInput, IconButton, PlusIcon} from 'evergreen-ui'
import axios from 'axios'
import { AppContext } from '../../../context/AppContext';

const AddComment = (props) => {
    const [comment, setComment] = useState('');
    const { loading, setLoading } = useContext(AppContext);

    const handleChange = (e) => {
        setComment({...comment, [e.target.id]: e.target.value})
    }
    
    const postComment = async (e) => {
        let field = e.target
        e.preventDefault()
        try {
            let response = await axios.post(`/api/comments/post/${props.postID}`, comment)
            setLoading(!loading)
            setComment("")
            field.reset()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Pane paddingLeft={16} >
            <form onSubmit={postComment} className="ac-form">
            <TextInput
                name="owner"
                id="owner"
                placeholder="What's your name?"
                width="30%" 
                marginBottom={16}
                onChange={handleChange}
            />
            <TextInput
                name="text-input-name"
                id="comment"
                placeholder="Write your comment here..."
                width="50%" 
                marginBottom={16}
                onChange={handleChange}
            />
            <IconButton type="submit" icon={PlusIcon} height={32} width={32} />
            </form>
        </Pane>
    )
}

export default AddComment
