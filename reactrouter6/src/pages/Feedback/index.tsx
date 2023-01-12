import { FC, memo } from "react";

interface PageProps{}

const Feedback:FC<PageProps> = (props) => {
    return (
        <>
            <h3>Feedback</h3>
        </>
    )
}

export default memo(Feedback);