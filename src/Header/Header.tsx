import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {navLinks} from "../Nav/Nav";
import {Link} from "react-scroll";
import Sidebar from "../Sidebar/Sidebar";
import styles from './Header.module.scss'
import styleContainer from "../Common/Styles/Container.module.css";


function Header() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <div className={styles.header}>
            <div className={styleContainer.container}>
                {/*<Box sx={{ display: 'flex'}} >*/}
                {/*    <CssBaseline />*/}
                <AppBar component="nav"
                        style={{backgroundColor: "#f5f5f5", color: '#777', width: "100%", position: "relative", boxShadow: "none"}}
                >
                    <Toolbar style={{padding: "0", justifyContent: "flex-end"}}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{mr: 2, display: {sm: 'none'}}}
                        >
                            <MenuIcon style={{color: "#393939"}}/>
                        </IconButton>

                        <Typography
                            variant="h6"
                            component="div"
                            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                        >
                            Mim
                        </Typography>
                        <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                            {navLinks.map((item) => (
                                <Button key={item.name} sx={{color: '#fff'}}>
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className={styles.text}
                                        spy={true}
                                        smooth={true}
                                        offset={-75}
                                        duration={500}
                                    >{item.name}</Link>
                                </Button>
                            ))}
                        </Box>

                    </Toolbar>
                </AppBar>
                <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
                {/*</Box>*/}
            </div>
        </div>
    );
}

export default Header;