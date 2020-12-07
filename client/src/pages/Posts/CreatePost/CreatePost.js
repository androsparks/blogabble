import React from 'react'
import {Textarea, TextInput} from 'evergreen-ui'

const CreatePost = () => {
    return (
        <div>
            <h1> CREATE A NEW POST </h1> 
            <form>
            <TextInput
                name="text-input-name"
                placeholder="Text input placeholder..."
            />
            <Textarea
                name="textarea-1"
                placeholder="Textarea placeholder..."
            />
            </form>
        </div>
    )
}

export default CreatePost
