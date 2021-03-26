import ArrynBtn from '../../assets/images/game-of-thrones/Arryn.jpg';
import BaratheonBtn from '../../assets/images/game-of-thrones/Baratheon.jpg';
import BoltonBtn from '../../assets/images/game-of-thrones/Bolton.jpg';
import FreefolkBtn from '../../assets/images/game-of-thrones/Freefolk.jpg';
import FreyBtn from '../../assets/images/game-of-thrones/Frey.jpg';
import GreyjoyBtn from '../../assets/images/game-of-thrones/Greyjoy.jpg';
import LannisterBtn from '../../assets/images/game-of-thrones/Lannister.jpg';
import NightsWatchBtn from '../../assets/images/game-of-thrones/Nights-watch.jpg';
import StarkBtn from '../../assets/images/game-of-thrones/Stark.jpg';
import TargaryenBtn from '../../assets/images/game-of-thrones/Targaryen.jpg';
import TullyBtn from '../../assets/images/game-of-thrones/Tully.jpg';
import TyrellBtn from '../../assets/images/game-of-thrones/Tyrell.jpg';
import shuffle from '../../helpers/shuffle';

const cards1 = [
    {
      id: 1,
      bgImg: ArrynBtn,
      group: 0,
      display: false
    },
    {
      id: 2,
      bgImg: BaratheonBtn,
      group: 0,
      display: false
    },
    {
      id: 3,
      bgImg: BoltonBtn,
      group: 0,
      display: false
    },
    {
      id: 4,
      bgImg: FreefolkBtn,
      group: 0,
      display: false
    },
    {
      id: 5,
      bgImg: FreyBtn,
      group: 0,
      display: false
    },
    {
      id: 6,
      bgImg: GreyjoyBtn,
      group: 0,
      display: false
    },
    {
      id: 7,
      bgImg: LannisterBtn,
      group: 0,
      display: false
    },
    {
      id: 8,
      bgImg: NightsWatchBtn,
      group: 0,
      display: false
    },
    {
      id: 9,
      bgImg: StarkBtn,
      group: 0,
      display: false
    },
    {
      id: 10,
      bgImg: TargaryenBtn,
      group: 0,
      display: false
    },
    {
      id: 11,
      bgImg: TullyBtn,
      group: 0,
      display: false
    },
    {
      id: 12,
      bgImg: TyrellBtn,
      group: 0,
      display: false
    },
  ];
  const cards2 = [
    {
      id: 1,
      bgImg: ArrynBtn,
      group: 1,
      display: false,
    },
    {
      id: 2,
      bgImg: BaratheonBtn,
      group: 1,
      display: false,
    },
    {
      id: 3,
      bgImg: BoltonBtn,
      group: 1,
      display: false,
    },
    {
      id: 4,
      bgImg: FreefolkBtn,
      group: 1,
      display: false,
    },
    {
      id: 5,
      bgImg: FreyBtn,
      group: 1,
      display: false,
    },
    {
      id: 6,
      bgImg: GreyjoyBtn,
      group: 1,
      display: false,
    },
    {
      id: 7,
      bgImg: LannisterBtn,
      group: 1,
      display: false,
    },
    {
      id: 8,
      bgImg: NightsWatchBtn,
      group: 1,
      display: false,
    },
    {
      id: 9,
      bgImg: StarkBtn,
      group: 1,
      display: false,
    },
    {
      id: 10,
      bgImg: TargaryenBtn,
      group: 1,
      display: false,
    },
    {
      id: 11,
      bgImg: TullyBtn,
      group: 1,
      display: false,
    },
    {
      id: 12,
      bgImg: TyrellBtn,
      group: 1,
      display: false,
    },
  ];

  const _cards = shuffle(cards1.concat(cards2));

  export default _cards;