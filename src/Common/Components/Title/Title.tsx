import React from 'react';
import styles from './Title.module.scss'
import styleContainer from '../Common/Styles/Container.module.css'

type TitlePropsType = {
    title: string
}

function Title(props: TitlePropsType) {
    return (
       <div className={styles.title}>
           <h2>{props.title}</h2>
       </div>
    );
}

export default Title