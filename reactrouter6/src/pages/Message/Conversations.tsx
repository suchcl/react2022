import { FC, memo } from "react";
import styles from "./message.module.less";
import { useNavigate } from "react-router-dom";
interface PageProps {
    messageList: any
}
const Conversations: FC<PageProps> = ({ messageList }) => {
    const navigate = useNavigate();
    // 跳转到消息详情页
    const toMsgDetail = (id: number) => {
        console.log("id:", id);
        navigate(`/messageList/${id}`);
    }
    return (
        <>
            <ul className={styles['message-list']}>
                {
                    messageList.map((item:any) => {
                        return (
                            <li key={item.id} className={styles['message-item']} onClick={() => toMsgDetail(item.id)}>{item.title}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}
export default memo(Conversations);