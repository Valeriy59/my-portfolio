import React from 'react';
import styles from './Skills.module.scss'
import styleContainer from '../Common/Styles/Container.module.css'
import SkillItem from "./SkillItem/SkillItem";
import Title from "../Common/Components/Title/Title";
import jsImg from "../Assets/Image/jsImg.svg";
import reactImg from "../Assets/Image/reactImg.svg";
import reduxImg from "../Assets/Image/reduxImg.svg";
import muiImg from "../Assets/Image/muiImg.svg";
import htmlImg from "../Assets/Image/htmlImg.svg";
import cssImg from "../Assets/Image/cssImg.svg";


export type SkillType = {
    backgroundImage: string
}

export function Skills() {
    const js = {
        backgroundImage: `url(${jsImg})`
    }
    const react = {
        backgroundImage: `url(${reactImg})`
    }
    const html = {
        backgroundImage: `url(${htmlImg})`
    }
    const redux = {
        backgroundImage: `url(${reduxImg})`
    }
    const css = {
        backgroundImage: `url(${cssImg})`
    }
    const mui = {
        backgroundImage: `url(${muiImg})`
    }


    return (
        <div id="Skills" className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={styles.skills}>
                    <SkillItem style={js} title={'JS'} description={'Native JS'}/>
                    <SkillItem style={react} title={'React'} description={'React library for SPA'}/>
                    <SkillItem style={html} title={'HTML'} description={'HTML structure the app'}/>
                    <SkillItem style={redux} title={'Redux'} description={'Redux store management'}/>
                    <SkillItem style={mui} title={'MUI'} description={'MUI components'}/>
                    <SkillItem style={css} title={'CSS'} description={'CSS styling the app'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;