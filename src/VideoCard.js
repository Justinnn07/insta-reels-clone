import React, { useRef, useState } from 'react'
import "./VideoCard.css"
import VideoFooter from './VideoFooter'
import VideoHeader from './VideoHeader'
import { Waypoint } from "react-waypoint"
const VideoCard = ({ url, likes, shares, channel, avatarSrc, song }) => {

    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const videoRef = useRef(null);
    const onVideoPress = () => {
        if (isVideoPlaying) {
            videoRef.current.pause();
            setIsVideoPlaying(false);
        } else {
            videoRef.current.play()
            setIsVideoPlaying(true);
        }}
            

    return (
        <div className="video-card">
            <VideoHeader />
            <Waypoint 
            onPositionChange={onVideoPress}
            onLeave={onVideoPress}
            />
            <video ref={videoRef} onPlay onClick={onVideoPress} className="video-player" src={url} loop={true}></video>
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