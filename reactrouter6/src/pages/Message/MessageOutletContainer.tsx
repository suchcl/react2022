import { FC, memo, useState } from "react";
import { MessageTypes } from "@/types";
import ConversationsByOutlet from "./ConversationsByOutlet";
import { Outlet } from "react-router-dom";
import styles from "./message.module.less";

interface PageProps { }
const list: MessageTypes[] = [
    {
        id: 1,
        title: "消息1"
    },
    {
        id: 2,
        title: "消息2"
    }
];
const MessageOutletContainer: FC<PageProps> = (props) => {
    const [message, setMessage] = useState<MessageTypes[]>(list);

    return (
        <div className={styles['message-contaienr']}>
            <div className={styles['message-list-container']}>
                <h3>通过outlet组件占位，实现嵌套路由</h3>
                <ConversationsByOutlet messageList={message} />
            </div>
            <Outlet />
        </div>
    )
}
export default memo(MessageOutletContainer);