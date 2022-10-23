import { ImageBackground, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Calendar from "./Calendar";
import MainMessage from "./MainMessage";
import Quote from "./Quote";

const HomeScreen = () => {
    return (
        <ImageBackground source={require('../../assets/Background.png')} style={styles.backgroundContainer}>
            <MainMessage />
            <Calendar />
            <Quote />
        </ImageBackground>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({

    backgroundContainer: {
        flex: 1,
        alignItems: 'center',
        width: wp(100),
        height: hp(100),
        resizeMode: 'contain',
    },  
});

