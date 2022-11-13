import { ImageBackground, Text } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles";

const API_URL = "https://us-central1-whichday-80e32.cloudfunctions.net/app/isFirstDay";

const DayCircle = () => {

    const [isFirstDay, setIsFirstDay] = useState(null);

    const getData = async () => {
            await axios.get(API_URL)
            .then( (res) => {
                setIsFirstDay(res.data.isFirstDay);
            })
            .catch( (error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getData();
        }, 1000)
        return () => {
            clearInterval(interval);
        }
    },[])
    
    return (
        <ImageBackground source={require('../../../../assets/Day.png')} style={styles.dayCircle}>
                <Text style={styles.dayText}>{`Day ${isFirstDay ? 1 : 2}`}</Text>
        </ImageBackground>
    )
};

export default DayCircle;

