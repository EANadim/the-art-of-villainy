import React, { useEffect } from 'react';
import useStyles from './styles';

const Loss = (() => {
    const classes = useStyles();
    useEffect(() => {
    }, []);
    return (
        <div className={classes.lossPaperContainer}>
            <p className={classes.resultText}>REALITY IS OFTEN DISAPPOINTING</p>
        </div>
    )
});

export default Loss;