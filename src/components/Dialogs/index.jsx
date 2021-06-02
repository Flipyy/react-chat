import React from 'react';
import _ from "lodash"

import {DialogItem} from "../index";
import "./Dialogs.scss"
import {Input, Empty} from "antd";



const Dialogs = ({items, userId}) => {
    const [inputValue, setValue] = React.useState("")
    const [filtered, setFilteredItems] = React.useState(items)

    const onChangeInput = value => {
        setFilteredItems(
            items.filter(dialog => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0)
        )
        setValue(value)
    }

    return (
        <div className="dialogs">
            <div className="dialogs__search">
                <Input.Search
                    placeholder="Поиск среди контактов"
                    onChange={e => onChangeInput(e.target.value)}
                    value={inputValue}
                />
            </div>
            {filtered.length ? (_.orderBy(filtered, ["created_at"], ["desc"]).map(item => (
                <DialogItem
                    key={item._id}
                    isMe={item.user._id === userId}
                    {...item}
                />
            ))
            ) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Ничего не найдено"/>
                )
            }
        </div>
    );
};

export default Dialogs;