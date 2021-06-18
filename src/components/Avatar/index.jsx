import React from 'react';

import "./Avatar.scss"
import {generateAvatarFromHash} from "../../utils/helpers";

const Avatar = ({_id, avatar, fullname,}) => {

    if (avatar) {
        return (
            <img className="avatar" src={avatar} alt={`Avatar ${fullname}`}/>
        )
    } else {
        const {color, colorLighten} = generateAvatarFromHash(_id)
        const firstChar = fullname[0].toUpperCase()
        return <div style={{background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%`}} className="avatar avatar--symbol">{firstChar}</div>
    }
};

export default Avatar;