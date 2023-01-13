import { FC, memo } from "react";
import { useLocation } from "react-router-dom";
import styles from './index.module.less';

interface PageProps { }
const ProductList: FC<PageProps> = (props) => {
    const location = useLocation();
    console.log('%c [ location ]-7', 'font-size:13px; background:pink; color:#bf2c9f;', location)
    const { state } = location;
    return (
        <>
            <h3>产品列表</h3>
            <ul>
                {
                    state.map((item: any) => {
                        return (
                            <li key={item.id} className={styles['product-item']}>
                                <p>名称: {item.name}</p>
                                <p>价格: {item.price}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default memo(ProductList);