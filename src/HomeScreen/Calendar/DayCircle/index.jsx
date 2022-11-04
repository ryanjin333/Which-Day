import { ImageBackground, Text } from "react-native";
import { useState, useEffect } from "react";
import moment from "moment";
import styles from "./styles";


const DayCircle = () => {

    const holidays = [
        {
            name: "Rememberance Day",
            startDate: "11/11/2022",
            endDate: "11/12/2022",
        },
        {
            name: "Non-Instructional Day",
            startDate: "11/14/2022",
            endDate: "11/15/2022",
        },
        {
            name: "Winter Break",
            startDate: "12/19/2022",
            endDate: "01/03/2023",
        },
    ];

    const [isFirstDay, setIsFirstDay] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFirstDay(current => !current);
        }, 60000)
        return () => {
            clearInterval(interval);
        }
    })
    
    return (
        <ImageBackground source={require('../../../../assets/Day.png')} style={styles.dayCircle}>
                <Text style={styles.dayText}>{`Day ${isFirstDay ? 1 : 2}`}</Text>
        </ImageBackground>
    )
};

export default DayCircle;





   //&& moment().format('ddd') != "Sat" && moment().format('ddd') != "Sun"
    //moment().add(holiday.length, 'days').format('L')
    //setIsFirstDay(current => !current);

    // useEffect(() => {
    //     const interval = setInterval(() => {

    //         //TODO: Complete timer
            
    //         if (moment().format('ddd') != "Sat" && moment().format('ddd') != "Sun") {
    //             holidays.map( holiday => {
    //                 if (moment().format('L') == holiday.startDate) {
    //                     while (moment().format('L') == holiday.endDate) {
    //                         setIsFirstDay(current => !current);
    //                     }
    //                 }
    //             });
    //         }
    //     }, 1000);
    //     return () => {
    //         clearInterval(interval);
    //     }
    // }, [])