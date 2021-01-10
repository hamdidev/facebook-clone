import React, {useState,} from 'react'
import firebase from 'firebase'  
import { Avatar } from '@material-ui/core';
import PhotoLibraryIcon  from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from '../components/StateProvider'
import db from '../firebase'
import '../styles/msgSender.css'

const MsgSender = () => {
    const [{user}, dispatch] = useStateValue();

    const [input, setInput]= useState('')
    const [imageUrl, setImageUrl] = useState("")
    const handleSubmit = e =>{
        e.preventDefault();

        db.collection('posts').add({
            message:input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            image: imageUrl,

        })

        setImageUrl('')
        setInput('')

    }
    return (
        <div className="msgSender">
            <div className="msgSender__header">
                <Avatar src={user.photoURL} />
                <form>
                    <input placeholder={`What's in your mind? ${user.displayName}`} className="msgSender__input"
                    value={input} onChange={e=> setInput(e.target.value)}
                    />
                    <input placeholder={`Image URL (Optional)}`}
                    value={imageUrl} onChange={e=> setImageUrl(e.target.value)}
                    />
                    <button onClick={handleSubmit} type="submit">Hidden Button</button>
                </form>
            </div>
            <div className="msgSender__footer">
                <div className="msgSender__option">
                    <VideocamIcon style={{color:"red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="msgSender__option">
                    <PhotoLibraryIcon style={{color:"green"}} />
                    <h3>Photo / Video</h3>
                </div>
                <div className="msgSender__option">
                    <InsertEmoticonIcon style={{color:"orange"}} />
                    <h3>Feeling / Activity</h3>
                </div>
            </div>
            
        </div>
    )
}

export default MsgSender
