import { ImageBackground, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import MainMessage from "./MainMessage";
import Quote from "./Quote";

const HomeScreen = () => {
    return (
        <ImageBackground source={require('../../assets/Background.png')} style={styles.backgroundContainer}>
            <MainMessage />
            <Image source={require('../../assets/Calendar.png')} style={{
                width: wp(64.1), 
                height: hp(25.5), 
                alignSelf: 'flex-start', 
                marginLeft: wp(17.9), 
                marginTop: hp(27.3)}}/>
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

