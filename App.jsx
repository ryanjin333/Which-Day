import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import HomeScreen from './src/HomeScreen/HomeScreen';
import Swiper from 'react-native-swiper';
import SettingsList from './src/SettingsScreen/SettingsList';

const App = () => {


  return (
    <ImageBackground source={require('./assets/Background.png')} style={styles.backgroundContainer}>
      <Swiper loop={false} paginationStyle={styles.pagination} >
          <HomeScreen />
          <SettingsList />
      </Swiper>
    </ImageBackground>
  );
};

export default App;


const styles = StyleSheet.create({

  pagination: {
    marginBottom: 30,
  },
  backgroundContainer: {
    width: '100%',
    height: '100%',
     resizeMode: 'contain',
  },  

});
