import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div className={s.myPosts}>
        <div className={s.MyPosts_title}>My posts</div>
        <textarea name="" id="" cols="30" rows="5"></textarea>
        <button>Add post</button>
        <button>Remove</button>
        <div className={s.posts}>
            <Post />
            <Post />
            <Post />
        </div>
    </div>
}

export default MyPosts;