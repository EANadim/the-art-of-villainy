import React from 'react';
import useStyles from './styles';

export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <p className={classes.text}><span>&#169;</span>2021 Ehtesham Ahmad Nadim</p>
            <p className={classes.text}>All Rights Reserved</p>
        </div>
    );
}