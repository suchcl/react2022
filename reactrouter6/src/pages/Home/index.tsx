import { FC, memo, useState } from "react";
import styles from "./index.module.less";
import { Link, useNavigate } from "react-router-dom";
import { ProductProps } from "@/types";
interface PageProps { }

const data: Array<ProductProps> = [
    {
        id: 1,
        name: 'Mac Pro电脑',
        price: '13000'
    },
    {
        id: 2,
        name: 'Huawei P40',
        price: '4999'
    }
];
const Home: FC<PageProps> = (props) => {
    // 声明一个useNavigate实例
    const navigate = useNavigate();
    const handleDocs = () => {
        // 命令式的路由跳转
        navigate('/docs');
    }
    const [product, setProduct] = useState(data); // 商品信息

    // Navigate通过命令式传递普通类型值
    const sendCommonTypeData = () => {
        navigate("/navigateCmp", {
            state: "命令式传值"
        });
    }

    return (
        <div className={styles.home}>
            <h3>Home</h3>
            <button onClick={handleDocs}>产品说明</button>
            <div className={styles['product-style']}>
                <Link className={styles.link} to='/productList' state={product}>产品列表</Link>
            </div>
            <button onClick={sendCommonTypeData}>Navigate命令式传递普通类型值</button>
            <Link to='/feed'>验证接收Navigator传递的对象类型值</Link>
            <br />
            <Link to='/userList'>接收Navigate传递的数组类型值</Link>
        </div>
    )
}

export default memo(Home);