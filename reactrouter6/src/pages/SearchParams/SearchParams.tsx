import { FC, memo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface PageProps { }
const SearchParams: FC<PageProps> = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get("q");
    const name = searchParams.get("name");


    const updateName = (name: string) => {
        setSearchParams({name });
    }
    return (
        <>
            <h3>获取查询字符串</h3>
            <p>类型: {q}</p>
            <p>姓名:{name}</p>
            <button onClick={() => updateName("JennLukas")}>更新姓名</button>
        </>
    )
}

export default memo(SearchParams);