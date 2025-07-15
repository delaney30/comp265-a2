import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('./logo.png')} style={{ width: 200, height: 200 }} />

      <TouchableOpacity style={styles.button} onPress={() => router.push('/profile/account')}>
        <Text style={styles.buttonText}>Create a New Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/profile/login')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#536878',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#070B47',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: '#F5F5F5',
    fontSize: 20,
    textAlign: 'center',
  },
});

