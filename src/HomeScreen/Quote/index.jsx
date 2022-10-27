import { Text } from "react-native";
import { useState, useEffect } from "react";
import styles from "./styles";
import axios from "axios";

const API_URL = "https://dummyjson.com/quotes/random";

const Quote = () => {

    const [quote, setQuote] = useState("");

        useEffect(() => {
            const fetchData = async () => {
                await axios.get(API_URL)
                    .then( (res) => {
                        setQuote(`"${res.data.quote}" - ${res.data.author}`)
                    })
                    .catch( (error) => {
                        console.warn(error)
                    })
            }
            fetchData();
        },[])
        
    return (
        <Text style={styles.quote}>{quote}</Text>
    );
};

export default Quote;