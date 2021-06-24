import React from 'react';
import {FormOutlined, TeamOutlined} from "@ant-design/icons/lib/icons";
import {Modal, Button, Select, Form, Input} from "antd";
import {Dialogs} from "../index";
import {dialogsAPI, userAPI} from "../../utils/api";
import "./Sidebar.scss"
import {fetchDialogs} from "../../redux/actions/dialogs";
import {useDispatch} from "react-redux";

const { Option } = Select;
const { TextArea } = Input;

const Sidebar = ({items, user, handleOnSelectDialog, currentDialog}) => {

    const dispatch = useDispatch()

    const [visible, setVisible] = React.useState(false)
    const [selectedUserId, setSelectedUserId] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");
    const [messageText, setMessageText] = React.useState("");
    const [users, setUsers] = React.useState([]);


    const onShow = () => {
        setVisible(true)
    }

    const onClose = () => {
        dispatch(fetchDialogs())
        setVisible(false)
    }

    const onSearch = value => {
        setIsLoading(true);
        userAPI.findUsers(value).then(({ data }) => {
                setUsers(data);
                setIsLoading(false);
            }).catch(() => {
                setIsLoading(false);
            });
    };

    const onAddDialog = () => {
        dialogsAPI.create(
            {partner: selectedUserId,
                text: messageText
            }).then(
                onClose
        )
            .catch(() => {
                setIsLoading(false);
            });
    };


    const handleChangeInput = (value) => {
        setInputValue(value);
    };
    const onChangeTextArea = e => {
        setMessageText(e.target.value);
    };

    const onSelectUser = userId => {
        setSelectedUserId(userId);
    };

    const options = users.map(user => <Option key={user._id}>{user.fullname}</Option>)

    return (
        <div className="chat__sidebar">
            <div className="chat__sidebar-header">
                <div>
                    <TeamOutlined/>
                    <span>Список диалогов</span>
                </div>
                <Button shape="circle" icon={<FormOutlined/>} onClick={onShow}/>
            </div>
            <div className="chat__sidebar-dialogs">
                <Dialogs items={items} userId={user.data && user.data._id} onSelectDialog={handleOnSelectDialog}
                                   currentDialog={currentDialog}/>
            </div>


            <Modal title="Создать диалог"
                   visible={visible}
                   onCancel={onClose}
                   footer={[
                       <Button key="back" onClick={onClose}>
                           Закрыть
                       </Button>,
                       <Button
                           disabled={!messageText}
                           key="submit"
                           type="primary"
                           loading={isLoading}
                           onClick={onAddDialog}>
                           Создать
                       </Button>,
                   ]}>
                <Form className="add-dialog-form">
                    <Form.Item label="Введите имя пользователя или E-Mail">
                        <Select
                            value={inputValue}
                            onSearch={onSearch}
                            onChange={handleChangeInput}
                            onSelect={onSelectUser}
                            notFoundContent={null}
                            style={{width: '100%'}}
                            defaultActiveFirstOption={false}
                            showArrow={false}
                            filterOption={false}
                            placeholder="Введите имя пользователя или почту"
                            showSearch>
                            {options}
                        </Select>
                    </Form.Item>
                    {selectedUserId && (
                        <Form.Item label="Введите текст сообщения">
                            <TextArea
                                autosize={{ minRows: 3, maxRows: 10 }}
                                onChange={onChangeTextArea}
                                value={messageText}
                            />
                        </Form.Item>
                    )}
                </Form>
            </Modal>


        </div>


    );
};

export default Sidebar;