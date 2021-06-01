import React from 'react';


import {DialogItem, Message, Dialogs} from "../../components";
import "./Home.scss"

const Home = () => {
    return (
        <div className="home">


            <Dialogs
                items={[
                    {
                        _id: "e6b074e867d28f2a2acfa958bc820571",
                        text: "НАСА - Национальное управление по аэронавтике и исследованию космического пространства",
                        isReaded: false,
                        created_at: new Date(),
                        user:{
                            _id: "e6b074e867d28f2a2acfa958bc820571",
                            fullname: "Клэренс Уильям",
                            avatar: "https://sun3-10.userapi.com/s/v1/if1/AGm7O-kF3yJnUefBOPk5ua0ur-7237aWXxA8NeTdXnnrUutnSnYZNn9LIYyOEwh8dnpPHg.jpg?size=100x0&quality=96&crop=0,179,287,287&ava=1"
                        },
                    },
                    {
                        _id: "981458c014e22fdf5b13fe135eb40d06",
                        text: "Привет!",
                        isReaded: true,
                        created_at: new Date(),
                        user:{
                            _id: "981458c014e22fdf5b13fe135eb40d06",
                            fullname: "Марк Цукерберг",
                            avatar: "https://i.pinimg.com/originals/b8/65/cb/b865cb07934113d9d9e7dd93cd06cd1c.jpg",
                            isOnline: true
                        },
                    },
                    {
                        _id: "196b0f14eba66e10fba74dbf9e99c22f",
                        text: "Логотип крупнейшей компании по производству мыльных пузырей определил дальнейшее развитие",
                        isReaded: true,
                        created_at: new Date(),
                        user:{
                            _id: "196b0f14eba66e10fba74dbf9e99c22f",
                            fullname: "Иван Рыбаков",
                            avatar: null,
                            isOnline: true
                        },
                    }
                ]}
            />


            <Message avatar="https://sun3-12.userapi.com/s/v1/if2/Gnw7VG6ZO3sZdBufI-yPF2UYabRB86zUZByvTFtzABs3X6qmB-Z-C8UWqOZ2Q5XMMRsJ2MEnHfjTjyyey80Xx5NW.jpg?size=100x0&quality=96&crop=91,91,494,494&ava=1"
                     date="Fri May 28 2021 13:42:19"
                     audio="https://notificationsounds.com/storage/sounds/file-sounds-1149-goes-without-saying.mp3"
                     isMe={false}
                     isReaded={false}
            />
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