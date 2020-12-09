import React from 'react'
import {Link} from 'react-router-dom'
import './SignUp.css'
import {TextInputField, Button, Small, Text} from 'evergreen-ui'

const SignUp = () => {
    return (
        <main className="main-form-su">
        <form className="form-container">
            <h1 className="form-title"> SIGN UP FORM</h1>
            <Small className="form-subtitle"> Sign up for an account to create, read, and edit your own blog posts</Small>
            <TextInputField
            required
            id=""
            width={420}
            label="First Name:"
            placeholder="First Name"
            />
            <TextInputField
            label="Last Name"
            required
            id=""
            width={420}
            placeholder="Last Name"
            />
            <TextInputField
            required
            id=""
            width={420}
            label="Email"
            placeholder="Email"
            type="email"
            />
            <TextInputField
            required
            id=""
            width={420}
            label="Password"
            placeholder="Password"/>
            <TextInputField
            required
            id=""
            width={420}
            label="Confirm Password"
            placeholder="Confirm Password"/>
            <Button type="submit" height={32} appearance="primary">
            Submit
            </Button>
        </form>
        <Text> Already have an account? <Link to='/login'> Login Here. </Link> </Text>
        </main>
    )
}

export default SignUp
