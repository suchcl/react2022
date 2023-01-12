import { FC, memo } from "react";
interface PageProps{}
const PageNotFound:FC<PageProps> = (props) => {
    return (
        <>
            <h3>404</h3>
        </>
    )
}

export default memo(PageNotFound);