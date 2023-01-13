import { FC, memo } from "react";
import { useLocation } from "react-router-dom";

interface PageProps { }
const Product2: FC<PageProps> = (props) => {
    const location = useLocation();
    console.log('%c [ location ]-7', 'font-size:13px; background:pink; color:#bf2c9f;', location)
    const { name, price } = location.state;
    return (
        <>
            <h3>产品2</h3>
            <p>名称: {name}</p>
            <p>价格: {price}</p>
        </>
    )
}
export default memo(Product2);