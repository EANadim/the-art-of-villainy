import React from 'react';
import useStyles from './styles';

const Victory = (() => {
    const classes = useStyles();

    return (
        <div className={classes.victoryPaperContainer}>
            <p className={classes.resultText}>YOU WIN</p>
        </div>
    )
});

export default Victory;