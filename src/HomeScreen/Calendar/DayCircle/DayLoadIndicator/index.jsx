import { View, ActivityIndicator, AppState } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
import { showLoadingIndicator } from './dayLoadIndicatorSlice';

const DayLoadCircle = () => {

    //Redux
    const visible = useSelector((state) => state.dayLoadIndicator.visible);
    
    const appState = useRef(AppState.currentState);
    
    const dispatch = useDispatch();

    useEffect(() => {
        const subscription = AppState.addEventListener("change", nextAppState => {
        if (
            appState.current.match(/inactive|background/) &&
            nextAppState === "active"
        ) {
            dispatch(showLoadingIndicator());
        }

        appState.current = nextAppState;
        console.log("AppState", appState.current);
        });

        return () => {
        subscription.remove();
        };
    }, []);


    return (
        <View>
            <ActivityIndicator style={styles.activityIndicator} color='white' animating={visible}/>
        </View>
    )
}

export default DayLoadCircle;
