import React from "react";
import { SafeAreaView, Text } from "react-native";

import styles from "./styles";

const MainMessage = () => {

    return (
        <SafeAreaView style={styles.mainMessageContainer}>
            <Text style={styles.title}>{"Today \n is"}</Text>
        </SafeAreaView>
    );
}

export default MainMessage;