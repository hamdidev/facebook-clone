import React from 'react'
import Story from './Story';
import '../styles/storyReel.css'
import {useStateValue} from './StateProvider'

const StoryReel = () => {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="storyReel">
            <Story className="storyReel__story" image='https://images.unsplash.com/photo-1599729265418-22bc99d22011?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            profileSrc="https://images.unsplash.com/photo-1585237017125-24baf8d7406f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            title="Lara Smith"/>
            <Story className="storyReel__story" image='https://images.unsplash.com/photo-1536626164736-720ce8914465?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            profileSrc="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            title="Akram Usama"/>
            <Story className="storyReel__story" image='https://images.unsplash.com/photo-1520724807848-3ff34d6a3bba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
            profileSrc="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            title="Jack Williams"/>
            <Story className="storyReel__story" image='https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
            profileSrc="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            title="Fatima Ali"/>
            
            
        </div>
    )
}

export default StoryReel
