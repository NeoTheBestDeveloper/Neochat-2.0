import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return <div className={s.ProfileInfo}>
        <div className={s.logo}>
            <img className={s.logo_img}
                src={props.userAva}
                alt="" width="100" height="100"
            />
            <div className={s.description}>Hello I'm Neo</div>
        </div>
    </div>
}

export default ProfileInfo;