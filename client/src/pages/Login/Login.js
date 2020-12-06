import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import {TextInputField, Button, Small, Text} from 'evergreen-ui'

const Login = () => {
    return (
        <main className="main-form-log">
        <form className="form-container">
            <h1> Welcome Back. </h1>
            <Small> Sign in to create, read, and edit your posts</Small>
            <TextInputField
            required
            id=""
            width={420}
            label="Email"
            placeholder="Email"
            type="email"
            // validationMessage="This field is required"
            />
            <TextInputField
            required
            id=""
            width={420}
            label="Password"
            placeholder="Password"/>
            <Button type="submit" height={32} appearance="primary">
            Login
            </Button>
        </form>
        <Text> No Account? <Link to='/signup'> Create One. </Link> </Text>
        </main>
    )
}

export default Login
