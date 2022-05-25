import "./user.css"
const User = () => {
    return (
        <>
            <label className="lb">用户名：</label><input className="ipt" placeholder="请输入用户名" /><br />
            <label className="lb">密码：</label><input className="ipt" placeholder="请输入密码" /><br />
            <button className="btn btn-reset">重置</button><button className="btn btn-confirm">登录</button>
        </>
    );
}

export default User;