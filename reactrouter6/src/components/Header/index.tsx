import { FC, memo, useState } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import styles from "./index.module.less";
import { ProductProps } from "@components/types";
interface PageProps {}
const data: ProductProps = {
    name: "办公座椅",
    price: '159'
};
const Header: FC<PageProps> = (props) => {
    const [product,setProduct] = useState<ProductProps>(data);
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
                        style={({ isActive }) => isActive ? ({ color: '#6BE61A', fontSize: '16px' }) : ({})}
                    >反馈</NavLink>
                </li>
                <li>
                    {/* 这里不能使用Navigate来做链接跳转，要实现路由跳转，需要使用Link或者NavLink组件 */}
                    {/* <Navigate to="/about"></Navigate> */}
                    <Link to="/about">关于</Link>
                </li>
                <li>
                    <Link to='/product' state={"产品说明"}>产品</Link>
                </li>
                <li>
                    {/* <Link to='/product2' state={
                        {
                            name: "Nichoalas Zakas",
                            price: 160
                        }
                    }>产品2</Link> */}
                    <Link to='/product2' state={product}>产品3</Link>
                </li>
            </ul>
        </header>
    )
}

export default memo(Header);