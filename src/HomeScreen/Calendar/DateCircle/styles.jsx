import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    dateCircle: {  
        position: 'absolute',   
        width: wp(25.6),
        height: wp(25.6),
        marginLeft: wp(38.6),
        marginTop: wp(29.7),
        resizeMode: 'contain',
        flex: 1,
        alignItems: 'center',
    },

    topDateText: {
        marginTop: wp(6.7),
        color: '#EE0D0D',
        fontSize: wp(3.8),
        fontWeight: '500',
    },

    bottomDateText: {
        fontSize: wp(6.7),
        fontWeight: '500',
    },

});

export default styles;