import React from "react";
import {TeamOutlined, FormOutlined, EllipsisOutlined, CameraOutlined} from "@ant-design/icons/lib/icons";
import {Button, Input} from 'antd';

import {DialogItem, Messages, Dialogs, Status, ChatInput} from "../../components";
import "./Home.scss"

const Home = () => {
    return (
        <div className="home">
            <div className="chat">
                <div className="chat__sidebar">
                    <div className="chat__sidebar-header">
                        <div>
                            <TeamOutlined/>
                            <span>Список диалогов</span>
                        </div>
                        <Button shape="circle" icon={<FormOutlined/>}/>
                    </div>
                    <div className="chat__sidebar-dialogs">
                        <Dialogs
                            items={[
                                {
                                    _id: "e6b074e867d28f2a2acfa958bc820571",
                                    text: "НАСА - Национальное управление по аэронавтике и исследованию космического пространства",
                                    isReaded: false,
                                    created_at: new Date(),
                                    user: {
                                        _id: "e6b074e867d28f2a2acfa958bc820571",
                                        fullname: "Уильям Нельсон",
                                        avatar: "https://sun3-10.userapi.com/s/v1/if1/AGm7O-kF3yJnUefBOPk5ua0ur-7237aWXxA8NeTdXnnrUutnSnYZNn9LIYyOEwh8dnpPHg.jpg?size=100x0&quality=96&crop=0,179,287,287&ava=1"
                                    },
                                },
                                {
                                    _id: "981458c014e22fdf5b13fe135eb40d06",
                                    text: "Привет!",
                                    isReaded: true,
                                    created_at: new Date(),
                                    user: {
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
                                    user: {
                                        _id: "196b0f14eba66e10fba74dbf9e99c22f",
                                        fullname: "Иван Рыбаков",
                                        avatar: null,
                                        isOnline: true
                                    },
                                },
                                {
                                    _id: "dbe5072fe0b246a8ede836b56571eb74",
                                    text: "Ipsum non ad sunt duis consectetur commodo sunt aliqua. Nostrud dolore quis dolore occaecat labore culpa consectetur sunt do dolore labore. Ex occaecat est elit occaecat id esse incididunt consequat ad commodo ipsum veniam amet ipsum.",
                                    created_at: "Wed Mar 22 1978 23:00:55 GMT+0000 (UTC)",
                                    user: {
                                        _id: "dbe5072fe0b246a8ede836b56571eb74",
                                        fullname: "Heidi Mcmahon",
                                        avatar: null
                                    }
                                },
                                {
                                    _id: "a36eb549e3d262ef436c4ce594c69283",
                                    text: "Eu ad irure id mollit id nulla excepteur qui amet cillum cillum voluptate amet. Sint nulla occaecat aute sit et nulla et aute sit velit. Culpa cupidatat excepteur esse nisi minim fugiat Lorem qui velit mollit id.",
                                    created_at: "Wed Feb 23 1983 14:45:05 GMT+0000 (UTC)",
                                    user: {
                                        _id: "a36eb549e3d262ef436c4ce594c69283",
                                        fullname: "Rosalyn Rich",
                                        avatar: null
                                    }
                                },
                                {
                                    "_id": "cea4a9587c1d6becfdce785d511a1903",
                                    "text": "Qui pariatur fugiat proident ad veniam anim cupidatat. Quis veniam nostrud nisi cupidatat est aliqua ad adipisicing ad aliquip velit occaecat pariatur exercitation. Consequat pariatur officia velit tempor reprehenderit consequat deserunt consequat adipisicing esse reprehenderit.",
                                    "created_at": "Tue Sep 12 2000 09:34:28 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "cea4a9587c1d6becfdce785d511a1903",
                                        "fullname": "Massey England",
                                        "avatar": null
                                    }
                                },
                                {
                                    "_id": "56a106d42877fec54d035302746f6953",
                                    "text": "Exercitation enim sunt esse do ipsum esse. Nulla officia occaecat elit aliquip eu fugiat nulla enim aliquip id do magna. Aliqua mollit amet anim in enim voluptate eu.",
                                    "created_at": "Thu Jan 12 1984 16:02:53 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "56a106d42877fec54d035302746f6953",
                                        "fullname": "Weeks Clements",
                                        "avatar": null
                                    }
                                },
                                {
                                    "_id": "2a2f211a166062ab8f9e34d8a89bf0f4",
                                    "text": "Cillum sint est proident Lorem non et. Et anim elit et aliquip. Officia deserunt eiusmod ullamco nostrud anim laboris eu Lorem voluptate voluptate nisi.",
                                    "created_at": "Sat Jan 10 1987 10:11:14 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "2a2f211a166062ab8f9e34d8a89bf0f4",
                                        "fullname": "Carolina Nicholson",
                                        "avatar": null
                                    }
                                },
                                {
                                    "_id": "a1f0e9692fa616966a70f13924bbb6ec",
                                    "text": "Culpa enim id do laboris sit deserunt amet aliqua nisi quis. Ea aliquip dolore ad nisi aliqua sint nostrud dolor. Cupidatat adipisicing aliqua eiusmod ex voluptate laborum ad.",
                                    "created_at": "Wed Sep 19 2012 06:50:34 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "a1f0e9692fa616966a70f13924bbb6ec",
                                        "fullname": "Callahan Trevino",
                                        "avatar": null
                                    }
                                },
                                {
                                    "_id": "58dca6b33d798853591515005370f14d",
                                    "text": "Mollit aliquip dolore ea eiusmod ex elit labore do ipsum ad esse sint esse sunt. Nostrud culpa est irure pariatur. Minim non esse qui tempor sit aliqua ut laboris cupidatat eu est irure.",
                                    "created_at": "Wed Dec 05 2007 11:29:51 GMT+0000 (UTC)",
                                    "user": {
                                        "_id": "58dca6b33d798853591515005370f14d",
                                        "fullname": "Simmons Bentley",
                                        "avatar": null
                                    }
                                }
                            ]}
                        />
                    </div>
                </div>
                <div className="chat__dialog">
                    <div className="chat__dialog-header">
                        <div/>
                        <div className="chat__dialog-header-center">
                            <b className="chat__dialog-header-username">Максим Соколов</b>
                            <div className="chat__dialog-header-status">
                                <Status online={true}/>
                            </div>
                        </div>
                        <Button shape="circle" icon={<EllipsisOutlined style={{fontSize: "24px"}}/>}/>
                    </div>
                    <div className="chat__dialog-messages">
                        <Messages/>
                    </div>
                    <div className="chat__dialog-input">
                        <ChatInput/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;