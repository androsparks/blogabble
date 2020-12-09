import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import axios from 'axios';
import { AppContext } from '../../context/AppContext';
import {TextInputField, Button, Small, Text} from 'evergreen-ui'

const Login = ({history}) => {
    const [loginData, setLoginData] = useState('');
    const { setCurrentUser, currentUser } = useContext(AppContext);
  
    const handleChange = (e) => {
      setLoginData({ ...loginData, [e.target.id]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('/api/login', loginData);
        sessionStorage.setItem('user', response.data);
        setCurrentUser(response.data.user);
        history.push('/me/profile');
      } catch (error) {
        console.log('SignUp Error: ', error);
      }
    };

    return (
        <main className="main-form-log">
        <form className="form-container" onSubmit={handleSubmit}>
            <h1> Welcome Back. </h1>
            <Small> Sign in to create, read, and edit your posts</Small>
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
            onChange={handleChange}
            label="Password"
            type="password"
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
