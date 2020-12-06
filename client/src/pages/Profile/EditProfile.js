import React from 'react'
import {Popover, Pane, Avatar, Heading,Text, TextInputField, FilePicker, Button, EditIcon } from 'evergreen-ui'

const EditProfile = () => {
    return (
        <Popover
  content={
    <Pane
      width={300}
      height={300}
      display="flex"
    //   alignItems="center"
    //   justifyContent="center"
      flexDirection="column"
      padding={5}
    >
        <h3> EDIT PROFILE </h3>
    <TextInputField
        id=""
        width={200}
        label="First Name"
        placeholder="First Name"
    />
    <TextInputField
        id=""
        width={200}
        label="Last Name"
        placeholder="Last Name"
    />
    <Text> Avatar Upload:</Text>
    <FilePicker
        width={100}
        // marginBottom={32}
        onChange={files => console.log(files)}
        placeholder="Select the file here!"
    />
    <Button marginTop={5} width={80}> Submit </Button>
    </Pane>
  }
>
<Button marginY={8} marginRight={12} iconBefore={EditIcon} width={80}>Edit</Button>
</Popover>
    )
}

export default EditProfile
