import s from './Post.module.css';

const Post = (props) => {
    return <div>
        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png" />
            {props.message}
        </div>
        <div className={s.like}>
        <span><img src="https://i.pinimg.com/originals/39/44/6c/39446caa52f53369b92bc97253d2b2f1.png"/>Like {props.likesCount}</span>
        </div>
    </div>
}

export default Post;