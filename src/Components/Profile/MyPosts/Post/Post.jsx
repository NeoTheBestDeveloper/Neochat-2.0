import s from './Post.module.css'

const Post = (props) => {
    return <div className={s.post}>
        <div className={s.Post_ava}>
            <img src={props.ava} alt="ava" width="60" height="60" />
        </div>
        <div className={s.Post_content}>
            <div className={s.Post_content_author}>{props.author}</div>
            <div className={s.Post_content_text}>{props.text}</div>
            <span>like </span>
            <span>dislike</span>
        </div>
    </div>
}

export default Post