import React, { useEffect, useState } from 'react'
import "./App.css"
import VideoCard from './VideoCard'
import db from "./firebase"

function App() {

  const [reels, setReels] = useState([]) 

  useEffect(() => {
   db.collection('reels').onSnapshot(snapshot => {
     setReels(snapshot.docs.map(doc => doc.data()))
   })
  }, [])

  return (
    <div className="app">
      <div className="top">
        {/* logo */}
        <img className="app-logo" src="https://image.flaticon.com/icons/png/512/174/174855.png" alt=""/>
        
        {/* reels */}
        <h1>Reels</h1>
      </div>
      <div className="videos">
        {/* container */}
        {reels.map(({ channel, avatarSrc, song, url, likes, share }) => (
             <VideoCard 
             channel={channel}
             avatarSrc={avatarSrc}
             song={song}
             url={url}
             share={share}
             likes={likes}
            />
            ))}
          </div>
    </div>
  )
}

export default App
