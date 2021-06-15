import React from 'react';
import {Block, Button} from "../../../components";
import {userAPI} from "../../../utils/api";
import {Result, Spin} from "antd";
import {useHistory} from "react-router-dom";


const renderTextInfo = ({ hash, verified }) => {
    if (hash) {
        if (verified) {
            return {
                status: 'success',
                title: 'Готово!',
                message: 'Аккаунт успешно подтвержден!',
            };
        } else {
            return {
                status: 'error',
                title: 'Ошибка',
                message: 'Вы указали несуществующий или неверный хеш.',
            };
        }
    } else {
        return {
            status: 'info',
            title: 'Подтвердите почту',
            message: 'Ссылка с подтверждением аккаунта отправлена на E-Mail.',
        };
    }
};

const CheckEmailInfo = () => {
    let history = useHistory();
    const hash = window.location.search.split('hash=')[1];
    const [verified, setVerified] = React.useState(false)
    const [checking, setChecking] = React.useState(!!hash);
    const [info, setInfo] = React.useState(renderTextInfo({ hash, checking, verified }));

    const setStatus = ({ checking, verified }) => {
        setInfo(renderTextInfo({ hash, checking, verified }));
        setVerified(verified);
        setChecking(checking);
    };


    React.useEffect(() => {
        if (hash) {
            userAPI.verifyHash(hash)
                .then(() => {
                    setStatus({ verified: true, checking: false });
                })
                .catch(() => {
                    setStatus({ verified: false, checking: false });
                });
        }
    }, [])


    return (
        <div className="verify-block">
            <Block>
                {!checking ? (
                    <Result
                        status={info.status}
                        title={info.title}
                        subTitle={info.message}
                        extra={
                            info.status === 'success' &&
                            verified && (
                                <Button type="primary" onClick={() => history.push('/signin')}>
                                    Войти
                                </Button>
                            )
                        }
                    />
                ) : (
                    <div className="verify-block__loading">
                        <Spin size="large" />
                    </div>
                )}
            </Block>
        </div>
    );
};

export default CheckEmailInfo;