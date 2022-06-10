import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from  '@mui/material';
import { styled } from '@mui/material/styles';
import { useDispatch } from "react-redux";

import { getPosts } from './actions/posts'
import Posts from './components/posts/Posts'
import Form from './components/form/Form'

import memories from './images/memories.png'

const Image = styled('img')``;

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    return (
        <div>
            <Container maxWidth="lg">
                <AppBar sx={{
                    borderRadius: 15,
                    margin: '30px 0',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} 
                position="static" 
                color="inherit">
                    <Typography sx={{
                        color: 'rgba(0,183,255, 1)'
                    }} variant="h2" align="center">Memories</Typography>
                    <Image sx={{
                        marginLeft: '15px'
                    }} src={memories} alt="A family photograph drawing" height="60" />
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts></Posts>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form></Form>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default App