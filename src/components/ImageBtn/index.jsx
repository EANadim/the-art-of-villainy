import React, { useRef } from 'react';
import buttonRandomPosition from "../../helpers/buttonRandomPosition";
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';

const ImageBtn = (({ card, onToogleDisplay, coverImage }) => {
    const CardStyles = useRef({
        backgroundSize: "100%",
        position: "absolute",
        left: buttonRandomPosition().left + "%",
        top: buttonRandomPosition().top,
        height: "90px",
        width: "90px",
    });

    return (
        <>
            <Zoom in={true}>
                {card.display ? (
                    <Paper elevation={3} style={{ backgroundImage: "url(" + card.bgImg + ")", cursor: "pointer", ...CardStyles.current }} />)
                    : (
                        <Paper elevation={3} style={{ backgroundImage: "url(" + coverImage + ")", cursor: "pointer", ...CardStyles.current }} onClick={() => onToogleDisplay(card)} />)
                }
            </Zoom>
        </>
    )
});

export default ImageBtn;