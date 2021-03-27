import React, { useEffect } from 'react';
import nightKingTheme from '../../assets/music/night-king-theme.mp3';
import coverImage from '../../assets/images/game-of-thrones/Faceless.jpg';
import _cards from './cards';
import { useDispatch } from 'react-redux';
import { setHeaderColor } from "../../store/actions/header";
import Loss from './loss';
import Victory from './victory';
import NightKingBGImage from '../../assets/images/game-of-thrones/NightKing.jpg';
import Playground from '../Playground';

export default function NightKing() {
  const dispatch = useDispatch();

  const countdown = 90;
  const loss = <Loss />;
  const victory = <Victory />;

  useEffect(() => {
    const payload = {
      color: "#445b68"
    }
    dispatch(setHeaderColor(payload));
  }, []);

  return (
    <>
      <Playground
        loss={loss}
        victory={victory}
        _cards={_cards}
        countdown={countdown}
        themeMusic={nightKingTheme}
        bgImage={NightKingBGImage}
        coverImage={coverImage}
      />
    </>
  );
}