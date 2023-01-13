import { FC, memo } from "react";
import { useLocation } from "react-router-dom";

interface PageProps { }
const UseNavigateList: FC<PageProps> = (props) => {
    const location = useLocation();
    
    const { state } = useLocation();
    return (
        <>
            <h3>接收useNavigate传递的数组类型值</h3>
            <ul>
                {
                    state.map((item: any) => {
                        return (
                            <li key={item.id}>
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

export default memo(UseNavigateList);