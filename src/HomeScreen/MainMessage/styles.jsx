import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const styles = StyleSheet.create({

    mainMessageContainer: {
        position: 'absolute',
        alignSelf: 'flex-start',
        marginTop: hp(10.1),
        marginLeft: wp(7.7),
    },

    title: {
        fontSize: hp(5.7),      
        fontWeight: '700',
    },
});

export default styles;