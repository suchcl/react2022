import { FC, memo } from "react";

interface PageProps{}
const Docs:FC<PageProps> = (props) => {
    return (
        <>
            <h3>帮助</h3>
        </>
    )
}

export default memo(Docs);