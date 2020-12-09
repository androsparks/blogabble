import React, { useState, useContext } from 'react';
import axios from 'axios';
import './CreatePost.css'
import {Textarea, TextInput, Text, Label, Button} from 'evergreen-ui'
import { AppContext } from '../../../context/AppContext';

const CreatePost = ({history}) => {
    const { currentUser } = useContext(AppContext)
    const [formData, setFormData] = useState(null);

    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.id]: event.target.value });
      console.log(formData);
      console.log(event);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('/api/posts', formData, {withCredentials: true});
        // console.log(typeof response.data._id)
        history.push(`/post/${response.data._id}`);
      } catch (error) {
        console.log(error)
      }
    };

    return (
        <div>
            <h1> CREATE A NEW POST </h1> 
            <form onSubmit={handleSubmit}>
            <Label htmlFor="title" display="block" margin={4}> Title of Post </Label>
            <TextInput
                id="title"
                name="text-input-name"
                onChange={handleChange}
                placeholder="Title of post"
            />
            <Label htmlFor="subtitle" display="block" margin={4}> Subtitle </Label>
            <TextInput
                id="subtitle"
                name="text-input-name"
                onChange={handleChange}
                placeholder="Subtitle"
            />
            <Label htmlFor="body" display="block" margin={4}> Post Content </Label>
            <Textarea
                id="body"
                name="textarea-1"
                placeholder="Enter you blog post here..."
                onChange={handleChange}
                width={"80%"}
            />
            <Button type="submit" height={32} appearance="primary" display="block" marginTop={20}>
            Submit
            </Button>
            </form>
        </div>
    )
}

export default CreatePost
