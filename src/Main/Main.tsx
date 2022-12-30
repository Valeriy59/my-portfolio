import React from 'react';
import styles from './Main.module.scss'
import styleContainer from '../Common/Styles/Container.module.css'
import photoImg from "../Assets/Image/Photo2.png";
import TypingEffect from 'new-react-typing-effect';


function Main() {
    // const ReactTypingEffect = require("react-typing-effect");
    const photo = {
        backgroundImage: `url(${photoImg})`
    }
    return (
        <div id='Main' className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.textBox}>
                    <span className={styles.greeting}>HELLO, MY NAME IS</span>
                    <h1>Valery Litvinov</h1>
                    <span className={styles.greeting}><TypingEffect messages={['FRONTEND DEVELOPER']}/></span>
                    <p className={styles.text}>Having solid experience in control systems software developing, support and maintanance I am used to find growth and development opportunities at any stage of a system life cycle. Now I am expanding my expertise as a frontend developer using React, JS/TS to provide customers with advanced strategies and innovative solutions in short time.</p>
                </div>
                <div style={photo} className={styles.photo}></div>
            </div>
        </div>
    );
}

export default Main;