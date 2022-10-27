import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const styles = StyleSheet.create({

    quote: {
        width: wp(90),
        marginTop: hp(15.4),
        fontSize: hp(1.9),
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default styles;