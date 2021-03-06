import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setHeaderColor } from '../../store/actions/header';
import imperialMarchTheme from '../../assets/music/imperial-march-theme.mp3';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import useStyles from './styles';

export default function Home() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const audio = new Audio(imperialMarchTheme);

    useEffect(() => {
        audio.play();
        const payload = {
            color: "#000000"
        }
        dispatch(setHeaderColor(payload));
        return function cleanup() {
            audio.pause();
        }
    }, []);

    return (
        <Fragment>
            <div className={classes.paperContainer}>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={2} className={classes.levelSelectionButtons}>
                            <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                                <Grid key={'darkseid'}>
                                    <Link className={classes.levelSelectionAnchor} to={"/darkseid"}><button className={classes.buttonStepDarkseid}><p className={classes.btnText} style={{ fontFamily: "JUSTICE LEAGUE" }}>PLAY AS DARKSEID</p></button></Link>
                                </Grid>
                            </Slide>
                            <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                                <Grid key={'night-king'}>
                                    <Link className={classes.levelSelectionAnchor} to={"/night-king"}><button className={classes.buttonStepNightKing}><p className={classes.btnText} style={{ fontFamily: "Game of Thrones" }}>PLAY AS NIGHT KING</p></button></Link>
                                </Grid>
                            </Slide>
                            <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                                <Grid key={'thanos'}>
                                    <Link className={classes.levelSelectionAnchor} to={"/thanos"}><button className={classes.buttonStepThanos}><p className={classes.btnText} style={{ fontFamily: "The Avengers" }}>SNAP THE AVENGERS</p></button></Link>
                                </Grid>
                            </Slide>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    );
}