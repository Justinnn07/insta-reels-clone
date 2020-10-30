import React, { useRef, useState } from 'react'
import "./VideoCard.css"
import VideoFooter from './VideoFooter'
import VideoHeader from './VideoHeader'

function VideoCard({ url, likes, shares, channel, avatarSrc, song }) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)

    const videoRed = useRef(null)

    const onVideoPress = () => {
    if (isVideoPlaying) {
        // stop
        videoRed.current.pause()
        setIsVideoPlaying(false)
    } else {
        // play
      videoRed.current.play()
      setIsVideoPlaying(true)
    }
}

    return (
        <div className="video-card">
            <VideoHeader />
            <video ref={videoRed} onClick={onVideoPress} className="video-player" src={url} loop={true}></video>
            <VideoFooter
            channel={channel}
            likes={likes}
            shares={shares}
            avatarSrc={avatarSrc}
            song={song}
           />
        </div>
    )
}

export default VideoCard;