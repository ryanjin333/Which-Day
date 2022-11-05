import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const styles = StyleSheet.create({

    mainMessageContainer: {
        position: 'absolute',
        alignSelf: 'flex-start',
        marginTop: hp(4.5),
        marginLeft: wp(7.7),
    },

    title: {
        fontSize: wp(12.3),      
        fontWeight: '700',
    },
});

export default styles;