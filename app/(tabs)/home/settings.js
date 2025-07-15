import { Text, View, StyleSheet, Image } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings Page</Text>
      <Text style={styles.text}>Maybe one day you will be able to edit the settings</Text>
      <Text style={styles.text}>For now, enjoy this picture</Text>
      <Image
        source={{ uri: 'https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Settings-1024.png' }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: '#536878',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  header: {
    color: 'white',
    fontSize: 30,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});