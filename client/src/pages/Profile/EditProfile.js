import React, {useState, useContext} from 'react'
import axios from 'axios'
import { AppContext } from '../../context/AppContext';
import {Popover, Pane, Avatar, Heading,Text, TextInputField, FilePicker, Button, EditIcon } from 'evergreen-ui'

const EditProfile = ({history}) => {
  const [updateData, setUpdateData] = useState(null)
  const { currentUser, setCurrentUser } = useContext(AppContext);

  const handleChange = (e) => {
    setUpdateData({ ...updateData, [e.target.id]: e.target.value });
  };

  const handleClick = async (e) => {
    const form = e.target
    // e.preventDefault();
    try {
      let response = await axios.post('/api/me',updateData, {withCredentials: true})
      setCurrentUser(response.data)
      setUpdateData(null)
      form.reset()
      // history.push('/me/profile')
    } catch (error) {

    }
}
    return (
        <Popover
  content={
    <Pane
      width={300}
      height={300}
      display="flex"
      flexDirection="column"
      padding={5}
    >
        <h3> EDIT PROFILE </h3>
        <form onSubmit={handleClick}>
    <TextInputField
        id="firstName"
        width={200}
        label="First Name"
        placeholder="First Name"
        onChange={handleChange}
    />
    <TextInputField
        id="lastName"
        width={200}
        label="Last Name"
        placeholder="Last Name"
        onChange={handleChange}
    />
    <Text> Avatar Upload:</Text>
    <FilePicker
        width={100}
        // marginBottom={32}
        onChange={files => console.log(files)}
        placeholder="Select the file here!"
    />
    <Button marginTop={5} width={80} type='Submit'> Submit </Button>
    </form>
    </Pane>
  }
>
<Button marginY={8} marginRight={12} iconBefore={EditIcon} width={80} >Edit</Button>
</Popover>
    )
}

export default EditProfile
