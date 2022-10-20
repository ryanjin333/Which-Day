import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import HomeScreen from './src/HomeScreen/HomeScreen';
import Swiper from 'react-native-swiper';

const App = () => {
  return (
      <Swiper loop={false} paginationStyle={styles.pagination} >
          <HomeScreen />
          <View style={styles.page2}>
            <Text>OKOK</Text>
          </View>
      </Swiper>
  );
};

export default App;

const styles = StyleSheet.create({

  

  pagination: {
    marginBottom: 50,
  },

  page2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
