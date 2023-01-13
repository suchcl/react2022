import { FC, memo, useEffect } from "react";
import { useParams } from "react-router-dom";

interface PageProps{}
const Detail:FC<PageProps> = () => {
    const {id} = useParams();

    useEffect(() => {
        console.log("effect");
    },[]);
    
    return (
        <>
            <h3>动态路由</h3>
            <p>文章编号: {id}</p>
        </>
    )
}

export default memo(Detail);