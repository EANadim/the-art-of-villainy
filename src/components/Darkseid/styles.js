import { makeStyles } from '@material-ui/core/styles';
import DarkseidVictory from '../../assets/images/justice-league/darkseid-victory.jpg';
import DarkseidLoss from '../../assets/images/justice-league/darkseid-loss.jpg';
import getWindowDimensions from '../../helpers/windowDimensions';

const useStyles = makeStyles((theme) => ({
    victoryPaperContainer: {
        height: getWindowDimensions().height,
        backgroundImage: "url(" + DarkseidVictory + ")",
        backgroundSize: "100%",
    },
    lossPaperContainer: {
        height: getWindowDimensions().height,
        backgroundImage: "url(" + DarkseidLoss + ")",
        backgroundSize: "100%",
    },
    resultText: {
        paddingTop: "20%",
        textAlign: "center",
        fontSize: "500%",
        fontFamily: "JUSTICE LEAGUE",
        color: "#24467e",
    }
}));
export default useStyles;