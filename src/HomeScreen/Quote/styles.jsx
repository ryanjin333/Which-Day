import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const styles = StyleSheet.create({

    quoteButton: {
        width: wp(90),
        marginTop: hp(15.4),
    },
    quoteMessage: {
        fontSize: wp(4.1),
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default styles;