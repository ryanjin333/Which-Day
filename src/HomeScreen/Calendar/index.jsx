import { View, Text, ImageBackground} from "react-native";
import { useState, useEffect } from "react";
import styles from "./styles";
import DateCircle from "./DateCircle";
import DayCircle from "./DayCircle";

const Calendar = () => {

    return (
        <View style={styles.calendarContainer}>
            <DayCircle />
            <DateCircle />
            <ImageBackground source={require('../../../assets/Decoration.png')} style={styles.decorationCircle}/>
            
        </View>
    );
};

export default Calendar;