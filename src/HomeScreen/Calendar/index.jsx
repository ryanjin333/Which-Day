import { View, Text, ImageBackground } from "react-native";
import moment from "moment";
import styles from "./styles";

const Calendar = () => {

    var month = moment().format('ddd');
    var date = moment().format('D');

    return (
        <View style={styles.calendarContainer}>
            <ImageBackground source={require('../../../assets/Day.png')} style={styles.dayCircle}>
                <Text style={styles.dayText}>Day 1</Text>
            </ImageBackground>
            <ImageBackground source={require('../../../assets/Date.png')} style={styles.dateCircle}>
                <Text style={styles.topDateText}>{month}</Text>
                <Text style={styles.bottomDateText}>{date}</Text>
            </ImageBackground>
            <ImageBackground source={require('../../../assets/Decoration.png')} style={styles.decorationCircle} />
        </View>
    );
};

export default Calendar;