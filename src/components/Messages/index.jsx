import React from 'react';
import {Empty, Spin, Alert} from "antd";
import classNames from "classnames";

import "./messages.scss"

import {Message} from "../index";
import {useSelector} from "react-redux";



const Messages = React.memo(({items, onRemoveMessage}) => {

    const messagesRef = React.useRef(null)

    const isLoading = useSelector(({messages}) => messages.isLoading)
    const user = useSelector(({user}) => user.data)

    React.useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scrollTo(0, 99999)
        }
    }, [items])


    return (

        <div ref={messagesRef} className={classNames("messages", {"messages--loading": isLoading})}>
            {
                isLoading ? (
                    <Spin tip="Загрузка сообщений..."/>
                ) : items && !isLoading ? (
                    items.length > 0 ? (
                        items.map((item) => (
                                <Message
                                    key={item._id}
                                    onRemoveMessage={onRemoveMessage.bind(this, item._id)}
                                    isMe={user._id === item.user._id}
                                    {...item}
                                />
                            )
                        )
                    ) : (
                        <Empty description="Диалог пуст"/>
                    )
                ) : (
                    <Empty description="Откройте диалог"/>
                )
                }
        </div>
        )
    }
)

export default Messages;

                {/*<Message
                    avatar="https://sun3-12.userapi.com/s/v1/if2/Gnw7VG6ZO3sZdBufI-yPF2UYabRB86zUZByvTFtzABs3X6qmB-Z-C8UWqOZ2Q5XMMRsJ2MEnHfjTjyyey80Xx5NW.jpg?size=100x0&quality=96&crop=91,91,494,494&ava=1"
                    date="Fri May 28 2021 13:42:19"
                    audio="https://notificationsounds.com/storage/sounds/file-sounds-1149-goes-without-saying.mp3"
                    isMe={  false}
                    isReaded={false}
                />
                <Message
                    avatar="https://sun3-12.userapi.com/s/v1/if2/Gnw7VG6ZO3sZdBufI-yPF2UYabRB86zUZByvTFtzABs3X6qmB-Z-C8UWqOZ2Q5XMMRsJ2MEnHfjTjyyey80Xx5NW.jpg?size=100x0&quality=96&crop=91,91,494,494&ava=1"
                    text="Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻"
                    date="Fri May 28 2021 13:42:19"
                    attachments={[
                        {
                            filename: "image.jpg",
                            url: "https://source.unsplash.com/100x100/?random=1&nature,water"
                        },
                        {
                            filename: "image.jpg",
                            url: "https://source.unsplash.com/100x100/?random=2&nature,water"
                        },
                        {
                            filename: "image.jpg",
                            url: "https://source.unsplash.com/100x100/?random=3&nature,water"
                        }
                    ]}
                    isMe={false}
                    isReaded={false}
                />
                <Message
                    avatar="https://sun3-13.userapi.com/s/v1/if1/SJExQDukPVzKIeIkJJPp_ZRWzK2V7xdSnYR4vRL6djX7yK93O8NJTh9-fcrWQ0dchO4tIVOC.jpg?size=100x0&quality=96&crop=38,0,396,396&ava=1"
                    text="Салам, брат Цезарь!"
                    date="Fri May 28 2021 13:48:19"
                    isMe={true}
                    isReaded={true}
                />
                <Message
                    avatar="https://sun3-12.userapi.com/s/v1/if2/Gnw7VG6ZO3sZdBufI-yPF2UYabRB86zUZByvTFtzABs3X6qmB-Z-C8UWqOZ2Q5XMMRsJ2MEnHfjTjyyey80Xx5NW.jpg?size=100x0&quality=96&crop=91,91,494,494&ava=1"
                    date="Sat May 29 2021 13:42:19"
                    attachments={[
                        {
                            filename: "image.jpg",
                            url: "https://source.unsplash.com/100x100/?random=1&nature,water"
                        }
                    ]}
                    isMe={false}
                    isReaded={false}
                />

                <Message
                    avatar="https://sun3-12.userapi.com/s/v1/if2/Gnw7VG6ZO3sZdBufI-yPF2UYabRB86zUZByvTFtzABs3X6qmB-Z-C8UWqOZ2Q5XMMRsJ2MEnHfjTjyyey80Xx5NW.jpg?size=100x0&quality=96&crop=91,91,494,494&ava=1"
                    text="Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻"
                    date="Fri May 28 2021 13:42:19"
                    isMe={false}
                    isReaded={false}
                />*/}
                {/*<Message avatar="https://sun3-12.userapi.com/s/v1/if2/Gnw7VG6ZO3sZdBufI-yPF2UYabRB86zUZByvTFtzABs3X6qmB-Z-C8UWqOZ2Q5XMMRsJ2MEnHfjTjyyey80Xx5NW.jpg?size=100x0&quality=96&crop=91,91,494,494&ava=1"
                     isTyping
                     isMe={false}
                     isReaded={false}
            />*/}
