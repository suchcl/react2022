import { FC, memo, useState } from "react";
import styles from "./index.module.less";
import { Link, useNavigate } from "react-router-dom";
interface PageProps { }
interface ProductProps {
    id: number;
    name: string;
    price: string;
}
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

    return (
        <div className={styles.home}>
            <h3>Home</h3>
            <button onClick={handleDocs}>产品说明</button>
            <div className={styles['product-style']}>
                <Link className={styles.link} to='/productList' state={product}>产品列表</Link>
            </div>
        </div>
    )
}

export default memo(Home);