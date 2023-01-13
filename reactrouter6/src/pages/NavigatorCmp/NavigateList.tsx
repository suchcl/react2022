import { FC, memo } from "react";
import { useLocation } from "react-router-dom"; // 导入userLocation，用来接收数据
interface PageProps { }
const NavigateList: FC<PageProps> = (props) => {
    // 实例化useLocation
    const location = useLocation();
    // 解构数据
    const { state } = location;
    return (
        <>
            <h3>接收Navigate数组类型值</h3>
            <ul>
                {
                    // 将传递过来的数据渲染到页面中
                    state.map((item: any) => {
                        return (
                            <li key={item.id}>
                                <p>姓名: {item.name}</p>
                                <p>年龄: {item.age}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default memo(NavigateList);