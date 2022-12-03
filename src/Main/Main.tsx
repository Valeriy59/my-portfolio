import React from 'react';
import styles from './Main.module.scss'
import styleContainer from '../Common/Styles/Container.module.css'
import photoImg from "../Assets/Image/Photo.png";

function Main() {
    const photo = {
        backgroundImage: `url(${photoImg})`
    }
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.textBox}>
                    <span className={styles.greeting}>HELLO, MY NAME IS</span>
                    <h1>Valery Litvinov</h1>
                    <p className={styles.text}>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled demord by.</p>
                </div>
                <div style={photo} className={styles.photo}></div>
            </div>

        </div>
    );
}

export default Main;