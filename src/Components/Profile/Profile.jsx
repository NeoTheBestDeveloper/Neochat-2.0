import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

const Profile = () => {
    return <div className={s.Profile}>
        <img className={s.content_img}
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftravelbylesley.co.uk%2Fwp-content%2Fuploads%2F2019%2F04%2Fbigstock-Beautiful-tropical-beach-with-68649619-Copy.jpg&f=1&nofb=1"
            alt=""
        />
        <div className={s.logo}>
            <img className={s.logo_img}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F2484602%2Fscreenshots%2F5954560%2Fjolly_fashion_logo1_4x.jpg&f=1&nofb=1"
                alt="" width="100" height="100"
            />
            <div className={s.description}>Hello I'm Neo</div>
        </div>
        <MyPosts />
    </div>
}

export default Profile;