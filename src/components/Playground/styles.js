import { makeStyles } from '@material-ui/core/styles';
import NightKing from '../../assets/images/game-of-thrones/NightKing.jpg';
import NightKingVictory from '../../assets/images/game-of-thrones/night-king-victory.jpg';
import NightKingLoss from '../../assets/images/game-of-thrones/night-king-loss.jpg';
import getWindowDimensions from '../../helpers/windowDimensions';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    paperContainer: {
        height: getWindowDimensions().height,
        backgroundSize: "100%",
    },
    timer: {
        float: "right",
        fontSize: "250%",
        color: "#FFFFFF",
        zIndex: "9999999999",
    },
}));
export default useStyles;