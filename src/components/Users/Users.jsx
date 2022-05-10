import React from "react";
import styles from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
                followed: false,
                fullName: 'Dimych',
                status: 'I am crazy guy',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: 2,
                photoUrl: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
                followed: false,
                fullName: 'Andrey',
                status: 'I am crazy guy',
                location: {country: 'Italy', city: 'Rome'}
            },
            {
                id: 3,
                photoUrl: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
                followed: true,
                fullName: 'Sveta',
                status: 'I am crazy guy',
                location: {country: 'Greece', city: 'Athens'}
            },
            {
                id: 4,
                photoUrl: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
                followed: true,
                fullName: 'Valeria',
                status: 'I am crazy guy',
                location: {country: 'Armenia', city: 'Yerevan'}
            }
        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span> <img src={u.photoUrl} className={styles.photo}/> </span>
                <span> {u.followed
                    ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>}
                </span>
                <span>
                    <span>
                        <div> {u.fullName} </div>
                        <div> {u.status} </div>
                    </span>
                    <span>
                        <div> {u.location.country} </div>
                        <div> {u.location.city} </div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;