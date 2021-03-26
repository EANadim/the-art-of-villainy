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
        // backgroundColor: "#a10609",
        backgroundImage: "url(" + NightKing + ")",
        backgroundSize: "100%",
    },
    timer: {
        float: "right",
        fontSize: "250%",
        color: "#FFFFFF",
        zIndex: "9999999999"
    },
    victoryPaperContainer: {
        height: getWindowDimensions().height,
        // backgroundColor: "#a10609",
        backgroundImage: "url(" + NightKingVictory + ")",
        backgroundSize: "100%",
    },
    lossPaperContainer: {
        height: getWindowDimensions().height,
        // backgroundColor: "#a10609",
        backgroundImage: "url(" + NightKingLoss + ")",
        backgroundSize: "100%",
    },
    resultText: {
        paddingTop: "20%",
        textAlign: "center",
        fontSize: "500%",
        fontFamily: "Game of Thrones",
        color: "#24467e",
    }
}));
export default useStyles;