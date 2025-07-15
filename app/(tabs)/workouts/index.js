import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function WorkoutsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Workouts Screen</Text>
      <Link href="/workouts/completed/" style={styles.button}>
        Log a workout!
      </Link>
      <Link href="/workouts/demo?special=videos" style={styles.button}>
        See some demo workouts!
      </Link>
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
    color: '536878',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#070B47',
    color: '#F5F5F5',
    fontSize: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
});
