import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import './UpdatePost.css'
import {Textarea, TextInput, Text, Label, Button} from 'evergreen-ui'
import { AppContext } from '../../../context/AppContext';

const UpdatePost = ({match, history}) => {
    const { currentUser } = useContext(AppContext)
    const [formData, setFormData] = useState(null);
    const [post, setPost] = useState("")

    useEffect(() => {
        getSinglePost()
    }, [])

    const getSinglePost = async () => {
        try {
            let response = await axios.get(`/api/posts/${match.params.id}`, {withCredentials: true})
            console.log(response.data)
            setPost(response.data.post)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.id]: event.target.value });
      console.log(formData);
      console.log(event);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.put(`/api/posts/${match.params.id}`, formData, {withCredentials: true});
        history.push('/me/posts');
      } catch (error) {
        console.log(error)
      }
    };

    return (
        <main className="updatePost-container">
            <h1> UPDATE YOUR POST </h1> 
            <form onSubmit={handleSubmit}>
            <Label htmlFor="title" display="block" margin={4}> Title of Post </Label>
            <TextInput
                id="title"
                name="text-input-name"
                onChange={handleChange}
                defaultValue={post?.title}
            /> 
            <Label htmlFor="subtitle" display="block" margin={4}> Subtitle </Label>
            <TextInput
                id="subtitle"
                name="text-input-name"
                onChange={handleChange}
                defaultValue={post?.subtitle}
            /> 
            <Label htmlFor="body" display="block" margin={4}> Post Content </Label>
            <Textarea
                id="body"
                name="textarea-1"
                onChange={handleChange}
                width={"80%"}
                defaultValue={post?.body}
                //467x200
                width={700}
                height={200}
            /> 
            <Button type="submit" height={32} appearance="primary" display="block" marginTop={20}>
            Update
            </Button>
            </form>
            <Button height={32} appearance="primary" intent="danger" display="block" marginTop={20}>
            Delete Post
            </Button>
        </main>
    )
}

export default UpdatePost
