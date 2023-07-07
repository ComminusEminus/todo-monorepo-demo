import React, {useState, useEffect} from 'react';

export const useOpenCloseController = () => {
    const [sheetState, setSheetState] = useState('loaded')
    const [animateState, setAnimateState] = useState('static')
    
    const sheetHandler = () => {
        console.log('sheetHandler')
        if(sheetState === 'loaded'){
            setAnimateState('animateOpen')
            console.log('animateState: animateOpen')
        }else if(sheetState === 'opened'){
            setAnimateState('animateClose')
            console.log('animateState: animateClose')
        }else if(sheetState === 'closed'){
            setAnimateState('animateOpen')
            console.log('animateState: animateOpen')
        }
    }

    useEffect(() => {
        if(animateState === 'animateOpen'){
            setSheetState('opened')
        }else if(animateState === 'animateClose'){
            setSheetState('closed')
            
        }
    },[animateState])

    return {sheetHandler, animateState};
}