import { FC, memo } from "react";

interface PageProps { }

const NewsList: FC<PageProps> = (props) => {
    return (
        <>
            <h3>NewsList</h3>
        </>
    )
}

export default memo(NewsList);