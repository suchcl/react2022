import { FC, memo } from "react";
import { useLocation } from "react-router-dom";
interface PageProps{}
const NavigateObj:FC<PageProps> = (props) => {
    const {name,age} = useLocation().state;
    return (
        <>
            <h3>接收Navigate组件传递的对象值</h3>
            <p>姓名: {name}</p>
            <p>年龄: {age}</p>
        </>
    )
}

export default memo(NavigateObj);