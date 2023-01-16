import { FC, memo } from "react";
import { useParams } from "react-router-dom";
import styles from './message.module.less';

interface PageProps{}

const MessageDetail:FC<PageProps> = (props) => {
    const {id} = useParams();

    return (
        <div className={styles['message-detail-container']}>
            <h3>消息详情</h3>
            <p>消息{`${id}`}</p>
        </div>
    )
}
export default memo(MessageDetail);