import { Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import styles from "./styles";
import axios from "axios";

const API_URL = "https://dummyjson.com/quotes";

const Quote = () => {

    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState("");

    const fetchData = async () => {
        await axios.get(API_URL)
            .then( (res) => {
                setQuotes(res.data.quotes.map((quote) => `"${quote.quote}" - ${quote.author}`));
                setQuotes(prevState => [
                    ...prevState,
                    `"The place you are from does not determine who you are destined to be." - Marco Maloto`
                ])
                getRandomQuote();
            })
            .catch( (error) => {
                setQuote("There was an error fetching your quote");
                console.log(error);
            })
    }

    const getRandomQuote = async () => {
        const randomQuoteIndex = Math.floor(Math.random() * (quotes.length));
        setQuote(quotes[randomQuoteIndex] || "Tap me to get an inspirational quote! 👆");
    }

        useEffect(() => {
            fetchData();
        },[])
        
    return (

        <TouchableOpacity onPress={() => getRandomQuote()} style={styles.quoteButton}>
            <Text style={styles.quoteMessage}>{quote}</Text>
        </TouchableOpacity>
    );
};

export default Quote;