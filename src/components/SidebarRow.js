import { Avatar } from '@material-ui/core';
import React from 'react'
import '../styles/sidebarRow.css'

const SidebarRow = ({title, src, Icon }) => {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon />}
            <h5>{title}</h5>
            
        </div>
    )
}

export default SidebarRow
