import { useState } from "react";
import style from "./UserList.module.css";
const UserList = () => {
    const UserList = [
        {
            id: 1,
            name: "Nicholas Zakas"
        },
        {
            id: 2,
            name: "Axel Rauschmayer"
        },
        {
            id: 3,
            name: "technology"
        }
    ];
    const [title, setTitle] = useState("React第一课");
    return (
        <>
            <h3>{title}</h3>
            <ul className={style.user}>
                {
                    UserList.map(item => {
                        return <li key={item.id}>{item.name}</li>
                    })
                }
            </ul>
        </>
    );
}

export default UserList;