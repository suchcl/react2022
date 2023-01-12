import { FC, memo } from "react";

interface PageProps{}
const About:FC<PageProps> = (props) => {
    return (
        <>
            <h3>关于</h3>
        </>
    )
}
export default memo(About);