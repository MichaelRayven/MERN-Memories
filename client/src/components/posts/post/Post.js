import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import { useDispatch } from "react-redux";
import { styled } from '@mui/material/styles'
import moment from 'moment'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { deletePost, likePost } from "../../../actions/posts";

const DivStyled = styled('div')``;

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();

    const handleEdit = () => {
        setCurrentId(post._id)
    }

    const handleDelete = async () => {
        dispatch(deletePost(post._id))
    }

    const handleLike = () => {
        dispatch(likePost(post._id))
    }

    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '15px',
            height: '100%',
            position: 'relative'
        }}>
            <CardMedia sx={{
                aspectRatio: '16 / 9',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backgroundBlendMode: 'darken'
            }}
            image={post.selectedFile}
            title={post.title} />
            <DivStyled sx={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                color: 'white'
            }}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </DivStyled>
            <DivStyled sx={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                color: 'white',
            }}>
                <Button sx={{color: 'white'}} size="small" onClick={handleEdit}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </DivStyled>
            <DivStyled sx={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '16px'
            }}>
                <Typography variant="body2" color="textSecondary">{
                    post.tags?.reduce((acc, tag) => acc + ` #${tag}`, "").trimStart()
                }</Typography>
            </DivStyled>
            <CardContent sx={{padding: '0 16px', wordBreak: 'break-word'}}>
                <Typography variant="h5" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions sx={{
                padding: '0 16px 8px 16px',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Button size="small" color="primary" onClick={handleLike}>
                    <ThumbUpAltIcon fontSize="small"/>
                    &nbsp;Like&nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={handleDelete}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post