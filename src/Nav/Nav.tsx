import React from 'react';
import styles from './Nav.module.css'
import { Link, animateScroll as scroll } from "react-scroll"

export const navLinks = [
    {
        name: 'HOME',
        path: 'Main'
    },
    {
        name: 'SKILLS',
        path: 'Skills'
    },
    {
        name: 'PROJECTS',
        path: 'Projects'
    },
    {
        name: 'CONTACT',
        path: 'Contacts'
    },
]

function Nav() {
    return (
        <div className={styles.nav}>
            {navLinks.map((nl) => (
                    <Link
                        key={nl.name}
                        to={nl.path}
                        className={styles.text}
                        activeClass={styles.active}
                        spy={true}
                        smooth={true}
                        offset={1}
                        duration={500}
                    >{nl.name}</Link>
                ))
            }

        </div>
    );
}

export default Nav;