import s from './Post.module.css'

const Post = () => {
    return <div className={s.post}>
        <div className={s.Post_ava}>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Favatar-370-456322.png&f=1&nofb=1" alt="ava" width="60" height="60" />
        </div>
        <div className={s.Post_content}>
            <div className={s.Post_content_author}>Neo</div>
            <div className={s.Post_content_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, animi. Accusamus saepe perspiciatis natus dolores iure atque at.</div>
            <span>like </span>
            <span>dislike</span>
        </div>
    </div>
}

export default Post