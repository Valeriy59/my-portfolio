import React from 'react';
import styles from './Projects.module.scss'
import styleContainer from '../Common/Styles/Container.module.css'
import ProjectItem from "./ProjectItem/ProjectItem";
import Title from "../Common/Components/Title/Title";
import socialNetworkImg from ".././Assets/Image/socialNetworkImg2.jpg"
import todolistImg from ".././Assets/Image/todolistImg1.jpg"
import counterImg from ".././Assets/Image/counterImg.jpg"
import cardsImg from ".././Assets/Image/cards.jpg"

export type ProjectType = {
    backgroundImage: string
}

export function Projects() {
    const projectItems = [
        {
            title: 'TodoList',
            link: 'https://valeriy59.github.io/todolist',
            description: 'Stack: React, Redux, React-redux, Redux-thunk, TypeScript, Axios, Material UI, Formik',
            style: {
                backgroundImage: `url(${todolistImg})`
            }
        },
        {
            title: 'Learning Cards',
            link: 'https://amnesia322.github.io/project',
            description: 'Stack: React, Redux, Redux-thunk, TypeScript, Axios, Material UI, Formik',
            style: {
                backgroundImage: `url(${cardsImg})`
            }
        },
        {
            title: 'Social Network',
            link: 'https://valeriy59.github.io/social-network-ts',
            description: 'Stack: React, Redux, TypeScript, Material UI',
            style: {
                backgroundImage: `url(${socialNetworkImg})`
            }
        },
        {
            title: 'Counter',
            link: 'https://valeriy59.github.io/counter-redux',
            description: 'Stack: React, Redux, TypeScript, Material UI',
            style: {
                backgroundImage: `url(${counterImg})`
            }
        }
    ]

    return (
        <div id="Projects" className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <Title title={"Projects"}/>
                <div className={styles.projects}>
                    {projectItems.map( item => <ProjectItem title={item.title} style={item.style} link={item.link} description={item.description}/>)}
                </div>
            </div>
        </div>
    );
}

export default Projects