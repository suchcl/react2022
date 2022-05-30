import style from "./Profile.module.less";
import portrait from "../assets/images/0db6b.jpeg";
const user = {
    name: "Katharine Houghton Hepburn",
    portrait: portrait,
    imageSize: 100
};

function formatDate(date) {
    return new Intl.DateTimeFormat(
        "zh-CN",
        {
            weekday: 'long'
        }
    ).format(date);
}

const Profile = () => {
    const today = new Date("2022-5-31");
    return (
        <div className={style.profile}>
            <h2>{user.name}</h2>
            <img src={user.portrait} alt={user.name} style={{
                width: user.imageSize,
                height: user.imageSize
            }} />
            <img
                src={user.portrait}
                alt={user.name}
                style={{
                    width: "90px",
                    height: "90px"
                }}></img>
            <h3>时间：{formatDate(today)}</h3>
        </div>
    );
}

export default Profile;