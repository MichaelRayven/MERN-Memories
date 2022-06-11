import React from "react";
import { CircularProgress, Grid, Box } from '@mui/material'
import { useSelector } from 'react-redux'
import Post from './post/Post'

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts)

    return (
        !posts.length ?  <Box sx={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }} ><CircularProgress/></Box>: (
            <Grid sx={{display: 'flex'}} container alignItems="stretch" spacing={3}>
                {posts.map(post => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts