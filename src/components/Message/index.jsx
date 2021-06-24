import React from 'react';
import classNames from "classnames";
import {Button, Popover} from "antd";
import {Emoji} from 'emoji-mart';
import reactStringReplace from 'react-string-replace';

import "./Message.scss"
import {convertCurrentTime, isAudio} from "../../utils/helpers"
import waveSvg from "../../assets/img/wave.svg"
import playSvg from "../../assets/img/play.svg"
import pauseSvg from "../../assets/img/pause.svg"
import {Time, IconReaded, Avatar} from "../"
import {EllipsisOutlined} from "@ant-design/icons/lib/icons";
import EyeOutlined from "@ant-design/icons/lib/icons/EyeOutlined";


const MessageAudio = ({audioSrc}) => {
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
        <div className="message__bubble">
            <div className="message__audio">
                <audio ref={audioElem} src={audioSrc} preload="auto"/>
                <div className="message__audio-progress" style={{width: progress + "%"}}/>
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
        </div>
    )

}

const Message = ({_id, user, text, date, isMe, read, attachments, isTyping, onRemoveMessage, setPreviewImage}) => {

    const renderAttachment = item => {
        if (item.ext !== 'webm') {
            return (
                <div
                    key={item._id}
                    onClick={() => setPreviewImage(item.url)}
                    className="message__attachments-item">
                    <div className="message__attachments-item-overlay">
                        <EyeOutlined style={{color: 'white', fontSize: 18}}/>
                    </div>
                    <img src={item.url} alt={item.filename}/>
                </div>
            );
        } else {
            return <MessageAudio key={item._id} audioSrc={item.url}/>
        }
    };

    return (
        <div className={classNames('message', {
            "message--isme": isMe,
            "message--is-typing": isTyping,
            "message--is-audio": isAudio(attachments),
            "message--image": !isAudio(attachments) && attachments && attachments.length === 1 && !text
        })}>
            <div className="message__content">
                {isMe && <IconReaded isReaded={read}/>}
                {isMe && <Popover
                    content={
                        <div>
                            <Button onClick={onRemoveMessage}>Удалить сообщение</Button>
                        </div>
                    }
                    trigger="click">
                    <div className="message__icon-actions">
                        <Button type="link" shape="circle" icon={<EllipsisOutlined style={{fontSize: "24px"}}/>}/>
                    </div>
                </Popover>}
                <div className="message__avatar">
                    <Avatar {...user}/>
                </div>
                <div className="message__info">
                    {(text || isTyping) && (
                        <div className="message__bubble">
                            {text && (
                                <p className="message__text">
                                    {reactStringReplace(text, /:(.+?):/g, (match, i) => (
                                        <Emoji key={i} emoji={match} set="apple" size={16}/>
                                    ))}
                                </p>
                            )}
                            {isTyping && (
                                <div className="message__typing">
                                    <span/>
                                    <span/>
                                    <span/>
                                </div>
                            )}
                            {false && (<MessageAudio audio={null}/>)}
                        </div>
                    )}
                    {attachments && (
                        <div className="message__attachments">
                            {attachments.map(item => renderAttachment(item))}
                        </div>
                    )}
                    {date && <span className="message__date">
                        <Time date={date}/>
                    </span>}
                </div>
            </div>
        </div>
    );
};

export default Message;