import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return <div className={s.Profile}>
        <ProfileInfo userAva={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F2484602%2Fscreenshots%2F5954560%2Fjolly_fashion_logo1_4x.jpg&f=1&nofb=1"} />
        <MyPosts />
    </div>
}

export default Profile;