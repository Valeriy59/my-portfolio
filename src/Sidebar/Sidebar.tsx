import React from 'react';
import {Box, Divider, Drawer, List, ListItem, ListItemButton} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {navLinks} from "../Nav/Nav";
import styles from "../Sidebar/Sidebar.module.css";
import {Link} from "react-scroll";
import IconButton from "@mui/material/IconButton";


type PropsType = {
    mobileOpen: boolean
    handleDrawerToggle: () => void
}

function Sidebar(props: PropsType) {

    const drawerWidth = 240;

    const drawer = (
        <Box onClick={props.handleDrawerToggle} sx={{textAlign: 'center'}}>
            <List>
                {navLinks.map((item) => (<>
                        <ListItem key={item.name} disablePadding>
                            <ListItemButton sx={{textAlign: 'center'}}>
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={styles.text}
                                    spy={true}
                                    smooth={true}
                                    offset={-75}
                                    duration={500}
                                >{item.name}</Link>
                            </ListItemButton>
                        </ListItem>
                        <Divider light={true}/>
                    </>
                ))}
            </List>
        </Box>
    );
    return (
        <Box component="nav">

            <Drawer
                anchor="right"
                variant="persistent"
                open={props.mobileOpen}
                onClose={props.handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: {xs: 'block', sm: 'none'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#2b2b2b"},
                }}
            >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={props.handleDrawerToggle}
                    sx={{ mr: 22, display: { sm: 'none' } }}
                >
                    <HighlightOffIcon fontSize="large" style={{color: "grey"}}/>
                </IconButton>
                {drawer}
            </Drawer>
        </Box>
    )
}
export default Sidebar