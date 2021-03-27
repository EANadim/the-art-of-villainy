import shuffle from '../../helpers/shuffle';

const importAll = ((r) => {
    return r.keys().map(r);
});
const images = importAll(require.context('../../assets/images/avengers/heroes/', false, /\.(png|jpe?g|svg)$/));
const cards1 = [];
const cards2 = [];
images.forEach((element, index) => {
    const card1 = {
        id: index + 1,
        bgImg: element.default,
        group: 0,
        display: false,
    }
    const card2 = {
        id: index + 1,
        bgImg: element.default,
        group: 1,
        display: false,
    }
    cards1.push(card1);
    cards2.push(card2);
});
const _cards = shuffle(cards1.concat(cards2));

export default _cards;