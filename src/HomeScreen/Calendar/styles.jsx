import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const styles = StyleSheet.create({

    calendarContainer: {
        width: wp(64.3),
        height: hp(25.5),
        marginTop: hp(27.3),
        //backgroundColor: 'gray'
    },

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

    dateCircle: {  
        position: 'absolute',   
        width: wp(25.6),
        height: hp(11.8),
        marginLeft: wp(38.6),
        marginTop: hp(13.7),
        resizeMode: 'contain',
        flex: 1,
        alignItems: 'center',
    },

    decorationCircle: {  
        position: 'absolute',   
        width: wp(13.6),
        height: hp(6.3),
        marginTop: hp(13.7),
        resizeMode: 'contain',
    },

    dayText: {
        fontSize: hp(4.3),
        fontWeight: '600',
    },

    topDateText: {
        marginTop: hp(3.1),
        color: '#EE0D0D',
        fontSize: hp(1.8),
        fontWeight: '500',
    },

    bottomDateText: {
        fontSize: hp(3.1),
        fontWeight: '500',
    },


});

export default styles;