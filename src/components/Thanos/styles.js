import { makeStyles } from '@material-ui/core/styles';
import ThanosVictory from '../../assets/images/avengers/thanos-victory.jpg';
import ThanosLoss from '../../assets/images/avengers/thanos-loss.jpg';
import getWindowDimensions from '../../helpers/windowDimensions';

const useStyles = makeStyles((theme) => ({
    victoryPaperContainer: {
        height: getWindowDimensions().height,
        backgroundImage: "url(" + ThanosVictory + ")",
        backgroundSize: "100%",
    },
    lossPaperContainer: {
        height: getWindowDimensions().height,
        backgroundImage: "url(" + ThanosLoss + ")",
        backgroundSize: "100%",
    },
    resultText: {
        paddingTop: "20%",
        textAlign: "center",
        fontSize: "500%",
        fontFamily: "The Avengers",
        color: "#6d3678",
    }
}));
export default useStyles;