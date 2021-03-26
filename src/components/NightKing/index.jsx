import React, { useState, useEffect } from 'react';
import ImageBtn from '../ImageBtn';
import nightKingTheme from '../../assets/music/night-king-theme.mp3';
import useStyles from './styles';
import _cards from './cards';
import { useDispatch } from 'react-redux';
import {setHeaderColor} from "../../store/actions/header";
const _ = require('lodash');

export default function NightKing() {
  const audio = new Audio(nightKingTheme);
  const dispatch = useDispatch()

  useEffect(() => {
    audio.play();
    const payload = {
      color: "#445b68"
    }
    dispatch(setHeaderColor(payload));
    return function cleanup() {
      audio.pause();
    }
  }, []);

  const classes = useStyles();
  const [cards, setCards] = useState(_cards);
  const [selectedCard, setSelectedCard] = useState(null);

  const onToogleDisplay = ((card) => {
    let _cards = _.cloneDeep(cards);
    if (selectedCard && selectedCard.id === card.id && selectedCard.group != card.group) {
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

  return (
    <div className={classes.paperContainer}>
      <div className={classes.root}>
        {cards.map((card) =>
          <ImageBtn key={card.group + '' + card.id} card={card} onToogleDisplay={onToogleDisplay} />
        )}
      </div>
    </div>
  );
}