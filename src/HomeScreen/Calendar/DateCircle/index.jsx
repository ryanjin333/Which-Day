import { ImageBackground, Text} from "react-native";
import { useState, useEffect } from "react";
import moment from "moment";
import styles from "./styles";

const DateCircle = () => {

    const [month, setMonth] = useState(moment().format('ddd'));
    const [date, setDate] = useState(moment().format('D'));

    useEffect(() => {
        const interval = setInterval(() => {
            setMonth(moment().format('ddd'));
            setDate(moment().format('D'));
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [])

    return(
        <ImageBackground source={require('../../../../assets/Date.png')} style={styles.dateCircle}>
            <Text style={styles.topDateText}>{month}</Text>
            <Text style={styles.bottomDateText}>{date}</Text>
        </ImageBackground>
    )
};

export default DateCircle;