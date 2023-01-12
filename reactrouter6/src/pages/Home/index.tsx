import { FC, memo } from "react";
import styles from "./index.module.less";
import { useNavigate } from "react-router-dom";
interface PageProps{}
const Home:FC<PageProps> = (props) => {
    // 声明一个useNavigate实例
    const navigate = useNavigate();
    const handleDocs = () => {
        // 命令式的路由跳转
        navigate('/docs');
    }
    return (
        <div className={styles.home}>
            <h3>Home</h3>
            <button onClick={handleDocs}>产品说明</button>
        </div>
    )
}

export default memo(Home);