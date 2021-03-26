import { makeStyles } from '@material-ui/core/styles';
import NightKing from '../../assets/images/game-of-thrones/NightKing.jpg';
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
        backgroundImage: "url("+NightKing+")",
        backgroundSize: "100%",
    },
}));
export default useStyles;