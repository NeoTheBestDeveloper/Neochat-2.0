import { NavLink } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    return <div className={s.dialogs}>
        <div className={s.dialogs_title}>Dialogs</div>
        <div className={s.content_wrapper}>
            <div className={s.dialogs_items}>
                <Dialog name='Dima' dialogId='1' />
                <Dialog name='Sveta' dialogId='2' />
                <Dialog name='Victor' dialogId='3' />
            </div>
            <div className={s.messages}>
                <Message author='Dima' text='Hi' ava='http://placehold.it/40x40/' />
                <Message author='Victor' text='Hello' ava='http://placehold.it/40x40/' />
                <Message author='Dima' text='How are you?' ava='http://placehold.it/40x40/' />
            </div>
        </div>
    </div>
}

export default Dialogs;