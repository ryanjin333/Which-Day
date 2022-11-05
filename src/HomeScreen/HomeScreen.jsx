import { View, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Calendar from "./Calendar";
import MainMessage from "./MainMessage";
import Quote from "./Quote";

const HomeScreen = () => {
    return (
        <View style={styles.homeScreenContainer}>
            <MainMessage />
            <Calendar />
            <Quote />
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

