import React from 'react'
import styles from './Contacts.module.scss'
import styleContainer from '../Common/Styles/Container.module.css'
import Title from "../Common/Components/Title/Title"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPhone, faEnvelope, faUniversity} from '@fortawesome/free-solid-svg-icons'
import {Button, Grid, Input, Slide, TextField, withStyles} from "@mui/material";




function Contacts() {
    const textFieldStyles = (theme: any) => ({
        notchedOutline: {
            borderWidth: "1px",
            borderColor: "yellow !important"
        }
    });
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
                    <Fade right>
                        {/*<form action="mailto:litvinovval@gmail.com" className={styles.contactsForm}>*/}
                        {/*<Grid container spacing={1}>*/}
                        {/*    <Grid xs={12} sm={6} item>*/}

                        {/*        <TextField InputProps={{ disableUnderline: true }} className={styles.input} placeholder={'Your Name'} variant="standard" fullWidth required/>*/}
                        {/*    </Grid>*/}
                        {/*    <Grid xs={12} sm={6} item>*/}
                        {/*        <TextField InputProps={{ disableUnderline: true }}className={styles.input} type={'email'} placeholder={'Your Email'} variant="standard" fullWidth required/>*/}
                        {/*    </Grid>*/}
                        {/*    <Grid xs={12} item>*/}
                        {/*        <TextField InputProps={{ disableUnderline: true }} className={styles.textarea} multiline rows={8} placeholder={'Your message'} variant="outlined" fullWidth required/>*/}
                        {/*    </Grid>*/}
                        {/*    <Grid xs={12} item>*/}
                        {/*        <Button type={'submit'} variant={'contained'} color={'primary'} >Send Message</Button>*/}
                        {/*    </Grid>*/}
                        {/*</Grid>*/}
                        {/*</form>*/}
                        <form action="mailto:litvinovval@gmail.com" className={styles.contactsForm}>
                            <input className={styles.input} type={'text'} placeholder={'Your Name'} required/>
                            <input className={styles.input} type={'email'} placeholder={'Your Email'} required/>
                            <textarea className={styles.textarea} placeholder={'Your message'} required></textarea>
                            <button className={styles.submitBtn} type={"submit"}>Send Message</button>
                        </form>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Contacts;




// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
//
//  const Contacts = () => {
//     const form = useRef<HTMLFormElement>(null);
//
//     const sendEmail = (e:any) => {
//         e.preventDefault();
//
//         emailjs.sendForm('service_bgygxzd', 'template_16d6sjm', form.current ? form.current : '', 'XPaISRUsejr1bTRpu')
//             .then((result) => {
//                 console.log(result.text);
//             }, (error) => {
//                 console.log(error.text);
//             });
//     };
//
//     return (
//         <form ref={form} onSubmit={sendEmail}>
//             <label>Name</label>
//             <input type="text" name="user_name" />
//             <label>Email</label>
//             <input type="email" name="user_email" />
//             <label>Message</label>
//             <textarea name="message" />
//             <input type="submit" value="Send" />
//         </form>
//     );
// };
// export default Contacts;