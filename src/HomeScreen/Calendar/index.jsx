import { View, Text, Image, ImageBackground } from "react-native";
import styles from "./styles";

const Calendar = () => {
    return (
        <View style={styles.calendarContainer}>
            <ImageBackground source={require('../../../assets/Day.png')} style={styles.dayCircle}>
                <Text style={styles.dayText}>Day 1</Text>
            </ImageBackground>
            <ImageBackground source={require('../../../assets/Date.png')} style={styles.dateCircle}>
                <Text style={styles.topDateText}>Wed</Text>
                <Text style={styles.bottomDateText}>24</Text>
            </ImageBackground>
            <ImageBackground source={require('../../../assets/Decoration.png')} style={styles.decorationCircle} />
        </View>
    );
};

export default Calendar;