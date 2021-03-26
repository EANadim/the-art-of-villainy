import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';

export default function Home() {
    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.paperContainer}>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={2} className={classes.levelSelectionButtons}>
                            <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                                <Grid key={'night-king'}>
                                    <Link className={classes.levelSelectionAnchor} to={"/night-king"}><button className={classes.buttonStepNightKing}>PLAY AS NIGHT KING</button></Link>
                                </Grid>
                            </Slide>
                            <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                                <Grid key={'thanos'}>
                                    <Link className={classes.levelSelectionAnchor} to={"/thanos"}><button className={classes.buttonStepThanos}>PLAY AS THANOS</button></Link>
                                </Grid>
                            </Slide>
                            <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                                <Grid key={'darkseid'}>
                                    <Link className={classes.levelSelectionAnchor} to={"/darkseid"}><button className={classes.buttonStepDarkseid}>PLAY AS DARKSEID</button></Link>
                                </Grid>
                            </Slide>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    );
}