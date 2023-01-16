import { FC, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { URLSearchParams } from "url";
import styles from "../../index.module.less";

interface PageProps { }

const WithSearchParams: FC<PageProps> = (props) => {
    const navigate = useNavigate();

    const useNavigateWithSearchParams = () => {
        console.log("useNavigate携带查询字符串");
        navigate({
            pathname: '/searchParams',
            search: '?q=react&src=typed_query&f=live&name=Nicholas&age=17'
        });
    }

    const useNavigateWithUrl = () => {
        navigate('/searchParams?q=react&src=typed_query&f=live&name=Nicholas&age=18');
    }
    return (
        <>
            <h3>携带查询字符串</h3>
            <div className={styles['search-prams']}>
                <Link to={{
                    pathname: '/searchParams',
                    search: '?q=react&src=typed_query&f=live&name=Nicholas&age=16'
                }}>Link组件通过在to属性中设置search属性传递查询字符串</Link>
                <br />
                <button onClick={useNavigateWithSearchParams}>通过useNavgate在命令式导航时携带查询字符串</button>
                <br />
                <button onClick={useNavigateWithUrl}>通过useNavigate，传递带有参数的url</button>
            </div>
        </>
    )
}
export default memo(WithSearchParams);