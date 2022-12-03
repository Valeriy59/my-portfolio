import React from 'react';
import styles from './ProjectItem.module.scss'
import {ProjectType} from "../Projects";


type PropsType = {
    title: string,
    description: string,
    style: ProjectType;
}

function ProjectItem (props: PropsType) {
    return (
        <div className={styles.projectItem}>
            <div style={props.style} className={styles.icon}>
                <a className={styles.ref} href={'See'}>See</a>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.title}>{props.title}</h3>
                <span className={styles.description}>{props.description}</span>
            </div>
        </div>
    );
}

export default ProjectItem;