import s from './Message.module.css';

const Message = (props) => {
    return <div className={s.message}>
        <div className={s.message_author}>
            <img className={s.author_ava} src={props.ava} alt="" />
            <div className={s.author_name}>{props.author}</div>
        </div>
        <div className={s.message_content}>
            <div className={s.message_text}>{props.text}</div>
        </div>
    </div>
}

export default Message;