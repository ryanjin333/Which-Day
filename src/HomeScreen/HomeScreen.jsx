import { View, Image, StyleSheet, ActivityIndicator } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Calendar from "./Calendar";
import MainMessage from "./MainMessage";
import Quote from "./Quote";
import DayLoadIndicator from "./Calendar/DayCircle/DayLoadIndicator";

const HomeScreen = () => {
    return (
        <View style={styles.homeScreenContainer}>
            <MainMessage />
            <Calendar />
            <Quote />
            <DayLoadIndicator />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({

    homeScreenContainer: {
        flex: 1,
        alignItems: 'center',
        width: wp(100),
        height: hp(100),

    },
});

