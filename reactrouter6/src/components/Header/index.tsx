import { FC, memo } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.less";
interface PageProps {

}

const Header: FC<PageProps> = (props) => {
    return (
        <header className={styles.header}>
            <ul className={styles.menu}>
                <li>
                    <Link to="/home">首页</Link>
                </li>
                <li>
                    <Link to="/newsList">列表</Link>
                </li>
                <li>
                    <Link to="/docs">帮助</Link>
                </li>
                <li>
                    <Link to="/feedback">反馈</Link>
                </li>
            </ul>
        </header>
    )
}

export default memo(Header);