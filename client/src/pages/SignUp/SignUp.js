import React, {useState, useContext} from 'react'
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import {Link} from 'react-router-dom'
import './SignUp.css'
import {TextInputField, Button, Small, Text} from 'evergreen-ui'

const SignUp = ({history}) => {
    const [signData, setSignData] = useState('');
    const { setCurrentUser, currentUser } = useContext(AppContext);
  
    const handleChange = (e) => {
      setSignData({ ...signData, [e.target.id]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(signData)
      try {
        const response = await axios.post('/api', signData);
        sessionStorage.setItem('user', response.data);
        setCurrentUser(response.data.user);
        history.push('/me/profile');
      } catch (error) {
        console.log('SignUp Error: ', error);
      }
    };

    return (
        <main className="main-form-su">
        <form className="form-container" onSubmit={handleSubmit}>
            <h1 className="form-title"> SIGN UP FORM</h1>
            <Small className="form-subtitle"> Sign up for an account to create, read, and edit your own blog posts</Small>
            <TextInputField
            required
            id="firstName"
            width={420}
            label="First Name:"
            placeholder="First Name"
            onChange={handleChange}
            />
            <TextInputField
            label="Last Name"
            required
            id="lastName"
            width={420}
            placeholder="Last Name"
            onChange={handleChange}
            />
            <TextInputField
            required
            id="email"
            width={420}
            label="Email"
            placeholder="Email"
            type="email"
            onChange={handleChange}
            />
            <TextInputField
            required
            id="password"
            width={420}
            label="Password"
            type="password"
            onChange={handleChange}
            placeholder="Password"/>
            <TextInputField
            required
            id=""
            width={420}
            label="Confirm Password"
            type="password"
            placeholder="Confirm Password"/>
            <Button type="submit" height={32} appearance="primary">
            Submit
            </Button>
        </form>
        <Text> Already have an account? <Link to='/sign'> sign Here. </Link> </Text>
        </main>
    )
}

export default SignUp
