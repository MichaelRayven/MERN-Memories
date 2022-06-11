import React, { useState, useEffect } from "react";
import { TextField , Button, Typography, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'

const FormStyled = styled('form')``;
const DivStyled = styled('div')``;

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''})
    const dispatch = useDispatch();

    const post = useSelector(state => currentId !== 0 ? state.posts.find(post => post._id === currentId) : null)

    useEffect(() => {
        if(post) {
            setPostData({ ...post, tags: post.tags?.reduce((acc, tag) => acc + ` #${tag}`, "").trimStart() })
        }
    }, [post])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (currentId === 0) {
            dispatch(createPost(postData))
        } else {
            dispatch(updatePost(currentId, postData))
        }
        clear()
    }

    const clear = () => {
        setCurrentId(0);
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
                <Typography variant="h6">{currentId === 0 ? "Creating a Memory" : "Refining a memory"}</Typography>
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
                    multiline
                    rows={4}
                    placeholder="Tell us how was your day..."
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
                <DivStyled sx={{
                    width: '97%',
                    margin: '10px 0'
                }}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => {setPostData({ ...postData, selectedFile: base64 })}}
                        />
                </DivStyled>
                <Button sx={{marginBottom: 2}} type="submit" variant="contained" color="primary" size="large" fullWidth>Submit</Button>
                <Button onClick={clear} variant="contained" color="secondary" size="small" fullWidth>Clear</Button>
            </FormStyled>
        </Paper>
    )
}

export default Form