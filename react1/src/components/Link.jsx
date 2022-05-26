const Link = () => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log("clicked");
    }
    return (
        <>
            <a href="https://www.baidu.com" onClick={handleClick}>百度</a>
        </>
    );
}

export default Link;