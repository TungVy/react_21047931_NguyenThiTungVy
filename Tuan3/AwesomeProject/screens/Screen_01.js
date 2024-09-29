import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Screen_01({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.style1}>
        <Text style={styles.text}>
          Order your favorite!
        </Text>
      </View>

      <View style={styles.style2}>
        <Image
          source={require('../assets/Data/Image_96.png')}
          style={{ width: 150, height: 150, marginLeft: 25, marginRight: 25 }}
        />
        <Image
          source={require('../assets/Data/Image_95.png')}
          style={{ width: 150, height: 150, marginLeft: 0, marginRight: 0, marginTop: 30 }}
        />
        <Image
          source={require('../assets/Data/Image_97.png')}
          style={{ width: 150, height: 150, marginLeft: 0, marginTop: 30 }}
        />
      </View>

      <View style={styles.style3}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Screen_02");
          }}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  style1: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    color: 'green',
    fontSize: 30,
    fontWeight: 'bold',
  },
  style2: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  style3: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 40,
    width: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
