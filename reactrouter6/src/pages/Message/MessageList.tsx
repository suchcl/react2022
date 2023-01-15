import { FC, memo, useState } from "react";
import Conversations from "./Conversations";
import {Routes, Route} from 'react-router-dom';
import styles from "./message.module.less";
import MessageDetail from "./MessageDetail";
interface PageProps { }
const list = [
    {
        id: 1,
        title: "消息1"
    },
    {
        id: 2,
        title: "消息2"
    }
];

const MessageList: FC<PageProps> = (props) => {
    const [MessageList,setMessageList] = useState(list);
    return (
        <>
            <h3>消息列表</h3>
            <Conversations messageList={MessageList}/>
            <div className={styles['message-detail-container']}>
                <Routes>
                    <Route path=":id" element={<MessageDetail />} />
                </Routes>
            </div>
        </>
    )
}

export default memo(MessageList);