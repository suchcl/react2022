import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./message.module.less";
import { MessageTypes } from "@/types";

interface PageProps {
    messageList: MessageTypes[]
}

const ConversationsByOutlet: FC<PageProps> = ({ messageList }) => {
    const navigate = useNavigate();
    const goDetail = (id:number) => {
        navigate(`/messageOutlet/${id}`);
    }
    return (
        <>
            <ul className={styles['message-list']}>
                {
                    messageList.map((item: any) => {
                        return (
                            <li key={item.id} className={styles['message-item']} onClick={() => goDetail(item.id)}>{item.title}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}
export default memo(ConversationsByOutlet);