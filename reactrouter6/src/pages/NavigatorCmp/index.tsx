import { FC, memo } from "react";
import { useLocation } from "react-router-dom";
import styles from "./index.module.less";
interface PageProps{}
const NavigateCmp:FC<PageProps> = (props) => {
    const location = useLocation();
    const {state} = location;
    return (
        <>
            <h3>接收Navigate的普通值</h3>
            <p>Navigate通过state携带的常规类型值: <span className={styles.fcr}>{state}</span></p>
        </>
    )
}
export default memo(NavigateCmp);