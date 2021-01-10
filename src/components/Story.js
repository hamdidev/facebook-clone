import { Avatar } from '@material-ui/core';
import React from 'react'
import '../styles/story.css'

const Story = ({image, profileSrc, title}) => {
    return (
        <div style={{background:`url(${image})`}} className="story">
            <Avatar className="story__avatar" src={profileSrc} />
            <h4>{title}</h4>
            
        </div>
    )
}

export default Story
