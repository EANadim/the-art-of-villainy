import { makeStyles } from '@material-ui/core/styles';
import NightKingVictory from '../../assets/images/game-of-thrones/night-king-victory.jpg';
import NightKingLoss from '../../assets/images/game-of-thrones/night-king-loss.jpg';
import getWindowDimensions from '../../helpers/windowDimensions';

const useStyles = makeStyles((theme) => ({
    victoryPaperContainer: {
        height: getWindowDimensions().height,
        backgroundImage: "url(" + NightKingVictory + ")",
        backgroundSize: "100%",
    },
    lossPaperContainer: {
        height: getWindowDimensions().height,
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