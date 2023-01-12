import { FC, memo } from "react";
import { Link, NavLink,Navigate} from "react-router-dom";
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
                    <Link to={{
                        pathname: '/newsList',
                        search: '?sort=date',
                        hash: '#hash'
                    }}>列表</Link>
                </li>
                <li>
                    <NavLink
                        to="/docs"
                        className={({ isActive }) => isActive ? `${styles['link']} ${styles['nav-active']}` : `${styles['link']}`}
                    >帮助</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/feedback"
                        style={({isActive}) => isActive ? ({color: '#6BE61A', fontSize: '16px'}) : ({})}
                    >反馈</NavLink>
                </li>
                <li>
                    {/* 这里不能使用Navigate来做链接跳转，要实现路由跳转，需要使用Link或者NavLink组件 */}
                    {/* <Navigate to="/about"></Navigate> */}
                    <Link to="/about">关于</Link>
                </li>
            </ul>
        </header>
    )
}

export default memo(Header);