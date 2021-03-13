import s from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    return <div className={s.dialog}>
        <NavLink to={`/dialogs/${props.dialogId}`}>{props.name}</NavLink>
    </div>
}

export default Dialog;