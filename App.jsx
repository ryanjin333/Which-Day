import { useEffect } from 'react';
import { StyleSheet, StatusBar, ImageBackground, SafeAreaView, Platform } from 'react-native';
import HomeScreen from './src/HomeScreen/HomeScreen';
import Swiper from 'react-native-swiper';
import SettingsList from './src/SettingsScreen/SettingsList';

const App = () => {
  
  useEffect(() => {
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor('#FFFFFF00'); 
    StatusBar.setTranslucent(true)
    }
   }, []);

  return (
    <ImageBackground source={require('./assets/Background.png')} style={styles.backgroundContainer}>
        <Swiper loop={false} paginationStyle={{marginBottom: 30}}>
          <SafeAreaView style={{height: '100%'}}>
            <HomeScreen />
          </SafeAreaView>      
            <SettingsList />
        </Swiper>
    </ImageBackground>
  );
};

export default App;


const styles = StyleSheet.create({

  backgroundContainer: {
    width: '100%',
    height: '100%',
     resizeMode: 'contain',
     backgroundColor: '#F5F5F5'
,  },  

});
