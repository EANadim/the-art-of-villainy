import React, { useEffect } from 'react';
import thanosTheme from '../../assets/music/thanos-theme.mp3';
import coverImage from '../../assets/images/avengers/avenger-logo.jpg';
import _cards from './cards';
import { useDispatch } from 'react-redux';
import { setHeaderColor } from "../../store/actions/header";
import Loss from './loss';
import Victory from './victory';
import ThanosBGImage from '../../assets/images/avengers/thanos.jpg';
import Playground from '../Playground';
const _ = require('lodash');

export default function Thanos() {
  const dispatch = useDispatch();
  
  const countdown = 5;
  const loss = <Loss />;
  const victory = <Victory />;

  useEffect(() => {
    const payload = {
      color: "#6d3678"
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
        themeMusic={thanosTheme}
        bgImage={ThanosBGImage}
        coverImage={coverImage}
      />
    </>
  );
}