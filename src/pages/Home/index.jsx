import React from 'react';


import {DialogItem, Message} from "../../components";
import "./Home.scss"

const Home = () => {
    return (
        <div className="home">
            <div className="dialogs">
                <DialogItem
                    user={{
                    isOnline: false
                    }}
                    unreaded={10}
                />
                <DialogItem
                    user={{
                        isOnline: true
                    }}
                    unreaded={0}
                />
                <DialogItem
                    user={{
                        isOnline: false
                    }}
                    unreaded={0}
                />

                {/*<Dialogs
                items={[
                    {
                        user:{
                            fullname: "Клэренс Уильям",
                            avatar: null
                        },
                        text: "НАСА - Национальное управление по аэронавтике и исследованию космического пространства",
                        isReaded: false,
                        created_at: new Date()
                    }
                ]}
            />*/}
            </div>
            {/*<Message avatar="https://sun3-12.userapi.com/s/v1/if2/Gnw7VG6ZO3sZdBufI-yPF2UYabRB86zUZByvTFtzABs3X6qmB-Z-C8UWqOZ2Q5XMMRsJ2MEnHfjTjyyey80Xx5NW.jpg?size=100x0&quality=96&crop=91,91,494,494&ava=1"
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
            />
            <Message avatar="https://sun3-13.userapi.com/s/v1/if1/SJExQDukPVzKIeIkJJPp_ZRWzK2V7xdSnYR4vRL6djX7yK93O8NJTh9-fcrWQ0dchO4tIVOC.jpg?size=100x0&quality=96&crop=38,0,396,396&ava=1"
                     text="Салам, брат Цезарь!"
                     date="Fri May 28 2021 13:48:19"
                     isMe={true}
                     isReaded={true}
            />
            <Message avatar="https://sun3-12.userapi.com/s/v1/if2/Gnw7VG6ZO3sZdBufI-yPF2UYabRB86zUZByvTFtzABs3X6qmB-Z-C8UWqOZ2Q5XMMRsJ2MEnHfjTjyyey80Xx5NW.jpg?size=100x0&quality=96&crop=91,91,494,494&ava=1"
                     date="Sat May 29 2021 13:42:19"
                     attachments={[
                         {
                             filename: "image.jpg",
                             url: "https://source.unsplash.com/100x100/?random=1&nature,water"
                         }
                     ]}
            />
            <Message avatar="https://sun3-12.userapi.com/s/v1/if2/Gnw7VG6ZO3sZdBufI-yPF2UYabRB86zUZByvTFtzABs3X6qmB-Z-C8UWqOZ2Q5XMMRsJ2MEnHfjTjyyey80Xx5NW.jpg?size=100x0&quality=96&crop=91,91,494,494&ava=1"
                     isTyping
            />*/}
        </div>
    );
};

export default Home;