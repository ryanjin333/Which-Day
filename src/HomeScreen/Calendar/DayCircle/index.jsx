import { ImageBackground, Text } from "react-native";
import { useState, useEffect } from "react";
import moment from "moment";
import styles from "./styles";


const DayCircle = () => {

    const holidays = [
        {
            name: "Rememberance Day",
            date: "10/31/2022",
            length: "1",
        },
        {
            name: "Non-Instructional Day",
            date: "11/14/2022",
            length: "1",
        },
        {
            name: "Winter Break",
            date: "12/19/2022",
            length: "15",
        },
    ];

    const [isFirstDay, setIsFirstDay] = useState(true);

    //&& moment().format('ddd') != "Sat" && moment().format('ddd') != "Sun"
    //moment().add(holiday.length, 'days').format('L')
    //setIsFirstDay(current => !current);

    var i = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            holidays.map( holiday => {
                if (moment().format('L') == holiday.date 
                    && moment().format('ddd') != "Sat" 
                    && moment().format('ddd') != "Sun") {

                }
            });
        }, 1000);
        console.log(1);
        return () => {
            clearInterval(interval);
        }
    }, [])
    
    return (
        <ImageBackground source={require('../../../../assets/Day.png')} style={styles.dayCircle}>
                <Text style={styles.dayText}>{`Day ${isFirstDay ? 1 : 2}`}</Text>
        </ImageBackground>
    )
};

export default DayCircle;