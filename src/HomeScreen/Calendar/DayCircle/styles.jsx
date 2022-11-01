import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const styles = StyleSheet.create({

    dayCircle: {
        position: 'absolute',
        width: wp(44.9),
        height: hp(20.7),
        marginLeft: wp(4.6),
        resizeMode: 'contain',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
    },

    dayText: {
        fontSize: hp(4.3),
        fontWeight: '600',
    },

});

export default styles;