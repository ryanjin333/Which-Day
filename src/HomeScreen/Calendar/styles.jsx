import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const styles = StyleSheet.create({

    calendarContainer: {
        width: wp(64.3),
        height: hp(25.5),
        marginTop: hp(27.3),
        //backgroundColor: 'gray'
    },

    decorationCircle: {  
        position: 'absolute',   
        width: wp(13.6),
        height: hp(6.3),
        marginTop: hp(13.7),
        resizeMode: 'contain',
    },


});

export default styles;