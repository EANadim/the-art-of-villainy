import React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Logo from '../assets/images/logo.png';
import useStyles from './styles';

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: '#8c0406' }}>
                <Toolbar>
                    <Link to='/'>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <img src={Logo} className={classes.logo} />
                        </IconButton>
                    </Link>
                    <Typography variant="h6" className={classes.title}>
                        The art of villainy
                     </Typography>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}