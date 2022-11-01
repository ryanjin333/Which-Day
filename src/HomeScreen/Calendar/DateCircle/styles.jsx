import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
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