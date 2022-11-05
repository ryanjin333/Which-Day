import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const styles = StyleSheet.create({

    calendarContainer: {
        width: wp(64.3),
        height: wp(55.4),
        marginTop: hp(21.6),
    },

    decorationCircle: {  
        position: 'absolute',   
        width: wp(13.6),
        height: wp(13.6),
        marginTop: wp(29.7),
        resizeMode: 'contain',
    },


});

export default styles;