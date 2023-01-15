import { FC, memo } from "react";

interface PageProps{}

const MessageDetail:FC<PageProps> = (props) => {
    return (
        <>
            <h3>消息详情</h3>
        </>
    )
}
export default memo(MessageDetail);