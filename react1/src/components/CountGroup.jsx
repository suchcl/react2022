import { useState } from "react";

// 子组件
const Count = ({ count, handleClick }) => {
    return <button onClick={handleClick}>{count}</button>
}

// 父组件
const CountGroup = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <>
            <h4>多个组件共享状态</h4>
            <Count count={count} handleClick={handleClick} />
            <Count count={count} handleClick={handleClick} />
            <Count count={count} handleClick={handleClick} />
        </>
    );
}

export default CountGroup;