import { FC, memo } from "react";
import { useLocation } from "react-router-dom";

interface PageProps{}
const UseNavigateObj:FC<PageProps> = (props) => {
    const {name,price} = useLocation().state;
    
    return (
        <>
            <h3>接收useNavigate传递的对象值</h3>
            <p>产品名称: {name}</p>
            <p>价格: {price}</p>
        </>
    )
}
export default memo(UseNavigateObj);