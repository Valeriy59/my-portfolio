import React from 'react';
import styles from './SkillItem.module.scss'
import {SkillType} from "../Skills";

type PropsType = {
    title: string,
    description: string,
    style: SkillType;
}

function SkillItem (props: PropsType) {
    return (
        <div className={styles.skillItem}>
            <div style={props.style} className={styles.icon}></div>
            <div className={styles.skillInfo}>
                <h3 className={styles.title}>{props.title}</h3>
                <span className={styles.description}>{props.description}</span>
            </div>
        </div>
    );
}

export default SkillItem;