import React, { useState, useEffect, Fragment } from 'react';
import ImageBtn from '../ImageBtn';
import Timer from '../../containers/Timer';
import useStyles from './styles';
const _ = require('lodash');

export default function Playground({ _cards, loss, victory, countdown, themeMusic, bgImage, coverImage }) {
    const classes = useStyles();
    const audio = new Audio(themeMusic);

    const [timeLeft, setTimeLeft] = useState(countdown);
    const [cards, setCards] = useState(_cards);
    const [selectedCard, setSelectedCard] = useState(null);
    const [gameState, setGameState] = useState(0); //0: playing, 1: victory, 2: loss

    useEffect(() => {
        audio.play();
        setInterval(() =>
            setTimeLeft(timeLeft => timeLeft - 1), 1000
        );
        return function cleanup() {
            audio.pause();
        }
    }, []);

    useEffect(() => {
        if (cards.length === 0 && timeLeft > 0) {
            audio.pause();
            setGameState(1);
        }
    }, [cards])

    const onToogleDisplay = ((card) => {
        let _cards = _.cloneDeep(cards);
        if (selectedCard && selectedCard.id === card.id && selectedCard.group !== card.group) {
            const tempCards = _cards.filter((item) => (!(item.id === card.id)));
            _cards = _.cloneDeep(tempCards);
        }
        else {
            _cards.forEach(element => {
                if (element.id === card.id && element.group === card.group) {
                    element.display = true;
                    setSelectedCard(element);
                }
                else {
                    element.display = false;
                }
            });
        }
        setCards(_cards);
    });

    const onCountdownEnd = (() => {
        audio.pause();
        if (cards.length > 0) {
            setGameState(2);
        } else {
            setGameState(1);
        }
    });

    return (
        <Fragment>
            {gameState === 0 && <div className={classes.paperContainer} style={{ backgroundImage: "url(" + bgImage + ")" }}>
                {timeLeft >= 0 &&
                    <Timer timeLeft={timeLeft} onCountdownEnd={onCountdownEnd} timerClass={classes.timer} />
                }
                <div className={classes.root}>
                    {cards.map((card) =>
                        <ImageBtn key={card.group + '' + card.id} card={card} onToogleDisplay={onToogleDisplay} coverImage={coverImage} />
                    )}
                </div>
            </div>}
            {gameState === 1 && victory}
            {gameState === 2 && loss}
        </Fragment>
    );
}