
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        maxWidth: 40,
        marginRight: '5px'
    },
    footer: {
        // position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgb(140, 4, 6)',
        color: 'white',
        textAlign: 'center',
    },
    text: {
        marginBottom: 0,
        fontFamily: "Arial, Helvetica, sans-serif"
    }
}));

export default useStyles;