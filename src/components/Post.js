import { Avatar } from '@material-ui/core';
import  ThumbUpIcon from '@material-ui/icons/ThumbUp';
import  AccountCircleIcon from '@material-ui/icons/AccountCircle';
import  ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import  ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import  NearMeIcon from '@material-ui/icons/NearMe';
import React from 'react'
import '../styles/post.css'

const Post = ({profilePic, image, username, timestamp, message}) => {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar src={profilePic} className="post__avatar" />
                <div className="post__headerInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()} </p>
                </div>
            </div>
            <div className="post__footer">
                <p>{message} </p>
            </div>
            <div className="post__image">
                <img src={image} alt=""/>
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Commet</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlinedIcon />
                    
                </div>
            </div>
        </div>
    )
}

export default Post
