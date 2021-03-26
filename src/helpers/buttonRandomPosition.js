import getWindowDimensions from './windowDimensions';

const buttonRandomPosition=(()=>{
    const top = Math.random() * (getWindowDimensions().height - 65) + 65;
    const left = Math.random() * (90 - 0) + 0; 
    return {
        top,
        left,
    };
});

export default buttonRandomPosition;