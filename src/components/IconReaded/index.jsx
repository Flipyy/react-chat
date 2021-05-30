import React from 'react';
import readedSvg from "../../assets/img/readed.svg";
import noReadedSvg from "../../assets/img/noreaded.svg";

const IconReaded = ({isMe, isReaded}) =>

    isMe && (isReaded ? (
        <img className="message__icon-readed" src={readedSvg} alt="Readed icon icon"/>
    ) : (
        <img className="message__icon-readed message__icon-readed--no" src={noReadedSvg}
             alt="No readed icon"/>
    ))

export default IconReaded;