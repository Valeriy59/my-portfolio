import React from 'react';
import styles from './Header.module.css'
import Nav from "../Nav/Nav";

function Header() {
    return (
        <div className={styles.header}>
            <Nav/>
        </div>
    );
}

export default Header;