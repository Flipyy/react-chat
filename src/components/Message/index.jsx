import React from 'react';
import classNames from "classnames";

import "./Message.scss"
import {convertCurrentTime} from "../../utils/helpers"
import waveSvg from "../../assets/img/wave.svg"
import playSvg from "../../assets/img/play.svg"
import pauseSvg from "../../assets/img/pause.svg"
import {Time, IconReaded} from "../"


const MessageAudio = ({audio}) => {
    const audioElem = React.useRef(null)
    const [isPlaying, setIsPlaying] = React.useState(false)
    const [progress, setProgress] = React.useState(0)
    const [currentTime, setCurrentTime] = React.useState(0)

    const togglePlay = () => {
        audioElem.current.volume = "0.02"
        if (!isPlaying) {
            audioElem.current.play()
        } else {
            audioElem.current.pause()
        }
    }

    React.useEffect(() => {
        audioElem.current.volume = "0.02"
        audioElem.current.addEventListener("playing", () => {
            setIsPlaying(true)
        }, false)
        audioElem.current.addEventListener("ended", () => {
            setIsPlaying(false)
            setProgress(0)
            setCurrentTime(0)
        }, false)
        audioElem.current.addEventListener("pause", () => {
            setIsPlaying(false)
        }, false)
        audioElem.current.addEventListener("timeupdate", () => {
            const duration = (audioElem.current && audioElem.current.duration) || 0
            setCurrentTime(audioElem.current.currentTime)
            setProgress((audioElem.current.currentTime / duration) * 100)
        })
    }, [])

    return (
        <div className="message__audio">
            <audio ref={audioElem} src={audio} preload="auto"/>
            <div className="message__audio-progress" style={{width: progress + "%"}}></div>
            <div className="message__audio-info">
                <div className="message__audio-btn">
                    <button onClick={togglePlay}>
                        {isPlaying ?
                            (<img src={pauseSvg} alt="Pause svg"/>
                            ) : (
                                <img src={playSvg} alt="Play svg"/>)
                        }
                    </button>
                </div>
                <div className="message__audio-wave">
                    <img src={waveSvg} alt="Wave svg"/>
                </div>
                <span className="message__audio-duration">
                    {convertCurrentTime(currentTime)}
                </span>
            </div>
        </div>
    )

}

const Message = ({avatar, user, text, date, isMe, isReaded, attachments, audio, isTyping}) => {

    return (
        <div className={classNames('message', {
            "message--isme": isMe,
            "message--is-typing": isTyping,
            "message--is-audio": audio,
            "message--image": attachments && attachments.length === 1
        })}>
            <div className="message__content">
                <IconReaded isMe={isMe} isReaded={isReaded}/>
                <div className="message__avatar">
                    <img src={avatar} alt={`Avatar ${user}`}/>
                </div>
                <div className="message__info">
                    {(text || isTyping || audio) && (
                        <div className="message__bubble">
                            {text && <p className="message__text">{text}</p>}
                            {isTyping && (
                            <div className="message__typing">
                                <span/>
                                <span/>
                                <span/>
                            </div>
                            )}
                            {audio && (
                                <MessageAudio audio={audio}/>
                            )}
                        </div>
                    )}
                    {attachments && <div className="message__attachments">
                        {attachments && attachments.map((item, index) => (
                            <div key={index} className="message__attachments-item">
                                <img src={item.url} alt={item.filename}/>
                            </div>
                        ))}
                    </div>}
                    {date && <span className="message__date">
                        <Time date={date}/>
                    </span>}
                </div>
            </div>
        </div>
    );
};

export default Message;