import React from 'react';
import _ from "lodash"
import {Input, Empty, } from "antd";

import {DialogItem} from "../index";
import "./Dialogs.scss"



const Dialogs = ({items, userId, onSelectDialog, currentDialog}) => {


    const [inputValue, setValue] = React.useState("")
    const [filtered, setFilteredItems] = React.useState(items)

    const onChangeInput = (value = '') => {
        setFilteredItems(
            items.filter(
                dialog =>
                    dialog.author.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
                    dialog.partner.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0,
            ),
        );
        setValue(value);
    };

    React.useEffect(() => {
        if (items.length) {
            onChangeInput();
        }
    }, [items]);


    return (
        <div className="dialogs">
            <div className="dialogs__search">
                <Input.Search
                    placeholder="Поиск среди контактов"
                    onChange={e => onChangeInput(e.target.value)}
                    value={inputValue}
                />
            </div>
            {items.length ? (_.orderBy(filtered, ["created_at"], ["desc"]).map(item => (
                <DialogItem
                    key={item._id}
                    isMe={item.author._id === userId}
                    {...item}
                    userId={userId}
                    onSelect={onSelectDialog}
                    currentDialog={currentDialog}
                />

            ))) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Ничего не найдено"/>
                )
            }
        </div>
    );
};

export default Dialogs;