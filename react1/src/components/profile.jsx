import style from "./Profile.module.css";
import portrait from "../assets/images/0db6b.jpeg";
const user = {
    name: "Katharine Houghton Hepburn",
    portrait: portrait,
    imageSize: 100
};

const Profile = () => {
    return (
        <div className={style.profile}>
            <h2>{user.name}</h2>
            <img src={user.portrait} alt={user.name} style={{
                width: user.imageSize,
                height: user.imageSize
            }} />
        </div>
    );
}

export default Profile;