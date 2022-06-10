import React, { useState } from "react";
import { TextField , Button, Typography, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts'

const FormStyled = styled('form')``;
const DivStyled = styled('div')``;

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    })
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(createPost(postData))
    }

    const clear = () => {
        setPostData({
            creator: '', title: '', message: '', tags: '', selectedFile: ''
        })
    }

    return (
        <Paper sx={{
            padding: 2
        }}>
            <FormStyled autoComplete="off" noValidate sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}
            onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>
                <TextField 
                    sx={{margin: 1}}
                    name="creator" 
                    variant="outlined" 
                    label="Creator" 
                    fullWidth 
                    value={postData.creator}
                    onChange={event => {setPostData({ ...postData, creator: event.target.value })}}
                />
                <TextField 
                    sx={{margin: 1}}
                    name="title" 
                    variant="outlined" 
                    label="Title" 
                    fullWidth 
                    value={postData.title}
                    onChange={event => {setPostData({ ...postData, title: event.target.value })}}
                />
                <TextField 
                    sx={{margin: 1}}
                    name="message" 
                    variant="outlined" 
                    label="Message" 
                    fullWidth 
                    value={postData.message}
                    onChange={event => {setPostData({ ...postData, message: event.target.value })}}
                />
                <TextField 
                    sx={{margin: 1}}
                    name="tags" 
                    variant="outlined" 
                    label="Tags" 
                    fullWidth 
                    value={postData.tags}
                    onChange={event => {setPostData({ ...postData, tags: event.target.value })}}
                />
            </FormStyled>
            <DivStyled sx={{
                width: '97%',
                margin: '10px 0'
            }}>
                <FileBase 
                    type="file"
                    multiple={false}
                    onDone={base64 => {setPostData({ ...postData, selectedFile: base64 })}}
                />
            </DivStyled>
            <Button sx={{marginBottom: 2}} type="submit" variant="contained" color="primary" size="large" fullWidth>Submit</Button>
            <Button onClick={clear} variant="contained" color="secondary" size="small" fullWidth>Clear</Button>
        </Paper>
    )
}

export default Form