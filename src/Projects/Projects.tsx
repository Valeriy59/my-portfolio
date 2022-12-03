import React from 'react';
import styles from './Projects.module.scss'
import styleContainer from '../Common/Styles/Container.module.css'
import ProjectItem from "./ProjectItem/ProjectItem";
import Title from "../Common/Components/Title/Title";
import socialNetworkImg from ".././Assets/Image/socialNetworkImg2.jpg"
import todolistImg from ".././Assets/Image/todolistImg1.jpg"
import counterImg from ".././Assets/Image/counterImg.jpg"

export type ProjectType = {
    backgroundImage: string
}

export function Projects() {
    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImg})`
    }
    const todolist = {
        backgroundImage: `url(${todolistImg})`
    }
    const counter = {
        backgroundImage: `url(${counterImg})`
    }

    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <Title title={"Projects"}/>
                <div className={styles.projects}>
                    <ProjectItem style={todolist} title={'TodoList'} description={'TodoList .TodoList TodoList TodoList TodoList TodoList TodoListTodoListTodoListTodoListTodoList;hj; s;afjlk;dfj'}/>
                    <ProjectItem style={socialNetwork} title={'Social Network'} description={'Social Network ldshfj afskjh affhjk'}/>
                    <ProjectItem style={counter} title={'Counter'} description={'Counter vksdhd text text text text text text text text text text text text text'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects