import { FC, memo } from "react";
import { useLocation } from "react-router-dom";

interface PageProps { }

const Product: FC<PageProps> = (props) => {
    const location = useLocation();
    return (
        <>
            <h3>产品</h3>
            <div className="p1">
                <h4>产品1</h4>
                <p>产品信息: {location.state}</p>
            </div>
            
        </>
    )
}

export default memo(Product);