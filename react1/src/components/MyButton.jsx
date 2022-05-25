function MyButton() {
    const buttonClick = () => {
        console.log("按钮被点击了");
    }
    return <button onClick={buttonClick}>Clike Me!</button>
}

export default MyButton;