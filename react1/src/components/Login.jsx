import { useState } from "react";

const Loged = () => {
    return (
        <>
            <div>已登录，请尽情游赏!</div>
        </>
    );
}

const UnLoged = () => {
    return (
        <>
            <div>未登录，请登录！</div>
        </>
    );
}

const Login = () => {
    let [logined, setLogined] = useState(false);
    // let [loginText, setLoginText] = useState("登录");
    // let renderContent;

    // if (logined) {
    //     renderContent = <>
    //         <div>已登录，请继续欣赏!</div>
    //     </>;
    // } else {
    //     renderContent = <>
    //         <div>未登录，请登录！</div>
    //     </>;
    // }

    // const login = () => {
    //     if (logined) {
    //         setLogined(false);
    //         setLoginText("登录");
    //     } else {
    //         setLogined(true);
    //         setLoginText("退出");
    //     }
    // }

    return (
        <>
            {/* {renderContent}
            <button onClick={login}>{loginText}</button> */}

            {/* {logined && <div>已登录，请尽情游赏!</div>} */}
            {/* {logined && <Loged />} */}
            {logined ? <Loged /> : <UnLoged />}
        </>
    );
}

export default Login;