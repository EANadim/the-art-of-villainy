import React, { useEffect } from 'react';
import darkseidTheme from '../../assets/music/darkseid-theme.mp3';
import coverImage from '../../assets/images/justice-league/justice-league-logo.jpg';
import _cards from './cards';
import { useDispatch } from 'react-redux';
import { setHeaderColor } from "../../store/actions/header";
import Loss from './loss';
import Victory from './victory';
import DarkseidBGImage from '../../assets/images/justice-league/darkseid.jpg';
import Playground from '../Playground';
export default function Darkseid() {
  const dispatch = useDispatch();

  const countdown = 60;
  const loss = <Loss />;
  const victory = <Victory />;

  useEffect(() => {
    const payload = {
      color: "#000000"
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
        themeMusic={darkseidTheme}
        bgImage={DarkseidBGImage}
        coverImage={coverImage}
      />
    </>
  );
}