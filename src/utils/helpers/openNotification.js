import {notification} from "antd";

const openNotification = ({text, title, type, duration = 3}) => notification[type]({
    message: title,
    description: text,
    duration: duration
})

export default openNotification