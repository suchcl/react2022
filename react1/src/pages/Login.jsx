const Login = () => {
    return (
        <>
            <div className="login">
                <form>
                    <label>用户名:</label><input type="text" placeholder="请输入用户名" /><br />
                    <label>密码:</label><input type="password" placeholder="请输入密码" /><br />
                    <button type="submit">登录</button>
                    <button type="reset">取消</button>
                </form>
            </div>
            <div className="register">
                <form>
                    <label>用户名:</label><input type="text" placeholder="请输入用户名" /><br />
                    <label>密码:</label><input type="password" placeholder="请输入密码" /><br />
                    <button type="submit">注册</button>
                    <button type="reset">重置</button>
                </form>
            </div>
        </>
    );
}

export default Login;