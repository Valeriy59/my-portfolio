import React from 'react';
import styles from './Contacts.module.scss'
import styleContainer from '../Common/Styles/Container.module.css'
import Title from "../Common/Components/Title/Title";

function Contacts() {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title title={"Let's get in touch"}/>
                <span className={styles.text}>Always available for freelancing if the right project comes along, Feel free to contact me.</span>
                    <form action="mailto:litvinovval@gmail.com" className={styles.contactsForm}>
                        <input type={'text'} placeholder={'Full Name'}/>
                        <input type={'text'} placeholder={'Email address'}/>
                        <textarea placeholder={'Type comment'}></textarea>
                        <button className={styles.submitBtn} type={"submit"}>Send</button>
                    </form>

            </div>
        </div>
    );
}

export default Contacts;