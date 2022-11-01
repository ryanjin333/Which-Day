import { Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import styles from "./styles";
import axios from "axios";

const API_URL = "https://dummyjson.com/quotes/random";

const Quote = () => {

    const [quote, setQuote] = useState("");

    const fetchData = async () => {
        await axios.get(API_URL)
            .then( (res) => {
                setQuote(`"${res.data.quote}" - ${res.data.author}`)
            })
            .catch( (error) => {
                console.log(error)
            })
    }

        useEffect(() => {
            fetchData();
        },[])
        
    return (

        <TouchableOpacity onPress={() => fetchData()} style={styles.quoteButton}>
            <Text style={styles.quoteMessage}>{quote}</Text>
        </TouchableOpacity>
    );
};

export default Quote;