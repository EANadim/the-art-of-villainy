import React from 'react';
import { useSelector } from 'react-redux'
import useStyles from './styles';

export default function Footer() {
    const classes = useStyles();
    const { color } = useSelector(state => state.header);
    
    return (
        <div className={classes.footer} style={{ backgroundColor: color }}>
            <p className={classes.text}><span>&#169;</span>2021 Ehtesham Ahmad Nadim</p>
            <p className={classes.text}>All Rights Reserved</p>
        </div>
    );
}