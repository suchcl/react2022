import { FC, memo } from "react";
import { Link, NavLink } from "react-router-dom";
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
            </ul>
        </header>
    )
}

export default memo(Header);