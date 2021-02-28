import s from './MyPosts.module.css';
import Post from './Post/Post';
import logo1 from './../../../img/logo1.png';
import logo2 from './../../../img/logo2.png';

const MyPosts = () => {
    return <div className={s.myPosts}>
        <div className={s.MyPosts_title}>My posts</div>
        <textarea name="" id="" cols="30" rows="5"></textarea>
        <button>Add post</button>
        <button>Remove</button>
        <div className={s.posts}>
            <Post text='Hi' author='Neo' ava={logo1} />
            <Post text='Hello' author='Maks' ava={logo2} />
            <Post text='How are you?' author='Neo' ava={logo1} />
        </div>
    </div>
}

export default MyPosts;