import Profile from "./profile";
import style from "./Gallery.module.less";
const Gallery = () => {
    return (
        <div className={style.gallery}>
            <h3>出色的演员</h3>
            <Profile />
            <Profile />
            <Profile />
        </div>
    );
}

export default Gallery;