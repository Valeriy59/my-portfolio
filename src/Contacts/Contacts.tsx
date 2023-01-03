import React, { useRef } from 'react'
import styles from './Contacts.module.scss'
import styleContainer from '../Common/Styles/Container.module.css'
import Title from "../Common/Components/Title/Title"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPhone, faEnvelope, faUniversity} from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';
import {useFormik} from 'formik';


interface Values {
    name: string;
    email: string;
    message: string;
}

function Contacts() {

    type FormikErrorType = {
        name?: string
        email?: string
        message?: string
    }

    const form = useRef<HTMLFormElement>(null);

    const formik = useFormik<Values>({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.name) {
                errors.name = 'Required'
            } else if (values.name.length<=3) {
                errors.name = 'Name length must be more than 3 symbols '
            }
            if (!values.message) {
                errors.message = 'Required'
            } else if (values.message.length<=10) {
                errors.message = 'Message length must be more than 10 symbols '
            }
            return errors
        },
        onSubmit: (values) => {
            emailjs.sendForm('service_bgygxzd', 'template_16d6sjm', form.current ? form.current : '', 'XPaISRUsejr1bTRpu')
                .then((result) => {
                    alert('Message sent')
                }, (error) => {
                    alert('Something went wrong')
                })
                .finally(() => formik.resetForm())

        }
    })

    const Fade = require("react-reveal/Fade");

    return (
        <div id='Contacts' className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsHeaderContainer}`}>
                <Title title={"Let's get in touch"}/>
                <span className={styles.text}>Always available for freelancing if the right project comes along, Feel free to contact me.</span>
                <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                    <Fade left>
                        <ul className={styles.contactText}>
                            <li><i className={styles.faPhone}><FontAwesomeIcon icon={faPhone} size="1x"/></i>
                                <h4>Phone</h4>
                                <span> <a href="tel:+7%950%468%0461">+7 950 468 0461</a></span>
                            </li>
                            <li><i><FontAwesomeIcon icon={faEnvelope} size="1x"/></i>
                                <h4>Email</h4>
                                <span> <a href="mailto:litvinovval@gmail.com">litvinovval@gmail.com</a></span>
                            </li>
                            <li><i><FontAwesomeIcon icon={faUniversity} size="1x"/></i>
                                <h4>Location</h4>
                                <span>Antalya, Turkiye</span>
                            </li>
                        </ul>
                    </Fade>
                        <form ref={form} onSubmit={formik.handleSubmit} className={styles.contactsForm}>
                            <input
                                className={styles.input}
                                type={'text'}
                                placeholder={'Your Name'}
                                required
                                {...formik.getFieldProps("name")}
                            />
                            {formik.touched.name && formik.errors.name && <div style={{color: 'red'}}>{formik.errors.name}</div>}
                            <input
                                className={styles.input}
                                type={'email'}
                                placeholder={'Your Email'}
                                required
                                {...formik.getFieldProps("email")}
                            />
                            {formik.touched.email && formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div>}
                            <textarea
                                className={styles.textarea}
                                placeholder={'Your message'}
                                required
                                {...formik.getFieldProps("message")}>
                            </textarea>
                            {formik.touched.message && formik.errors.message && <div style={{color: 'red'}}>{formik.errors.message}</div>}
                            <button
                                className={styles.submitBtn}
                                type={"submit"} value="Send" >
                                Send Message
                            </button>
                        </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts
