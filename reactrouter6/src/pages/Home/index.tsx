import { FC, memo } from "react";

interface PageProps{

}

const Home:FC<PageProps> = (props) => {
    return (
        <>
            <h3>Home</h3>
        </>
    )
}

export default memo(Home);