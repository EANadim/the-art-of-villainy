import { makeStyles } from '@material-ui/core/styles';
import ThanosBtn from '../../assets/images/thanos-btn.jpg';
import NightKingBtn from '../../assets/images/night-king-btn.jpg';
import DarkseidBtn from '../../assets/images/darkseid-btn.jpg';
import getWindowDimensions from '../../helpers/windowDimensions';

const cardHeight = 250;
const cardWidth = 250;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paperContainer: {
        height: getWindowDimensions().width < (cardWidth * 2) ? cardHeight * 4 : getWindowDimensions().height,
        backgroundColor: "#101010",
        // backgroundImage: `url(${"https://images4.alphacoders.com/705/705509.jpg"})`
    },
    control: {
        padding: theme.spacing(2),
    },
    buttonStepNightKing: {
        width: cardWidth,
        height: cardHeight,
        backgroundImage: 'url(' + NightKingBtn + ')',
        backgroundSize: "100%",
        margin: "10px",
        border: "none",
        borderRadius: "2px",
        color: '#FFFFFF',
    },
    buttonStepThanos: {
        width: cardWidth,
        height: cardHeight,
        backgroundImage: 'url(' + ThanosBtn + ')',
        backgroundSize: "100%",
        margin: "10px",
        border: "none",
        borderRadius: "2px",
        color: '#FFFFFF',
    },
    buttonStepDarkseid: {
        width: cardWidth,
        height: cardHeight,
        backgroundImage: 'url(' + DarkseidBtn + ')',
        backgroundSize: "100%",
        margin: "10px",
        border: "none",
        borderRadius: "2px",
        color: '#FFFFFF',
    },
    levelSelectionAnchor: {
        color: '#FFFFFF',
    },
    levelSelectionButtons: {
        paddingTop: "50px",
    },
    svg: {
        width: 100,
        height: 100,
    },
    polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
    },
    btnText: {
        color: "#ffffff",
        fontSize: '-webkit-xxx-large',
        fontWeight: 800,
    }
}));

export default useStyles;