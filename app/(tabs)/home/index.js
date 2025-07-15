import { Text, View, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground source={require('./gym.jpg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollContainer} style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image source={require('./logo.png')} style={styles.logo} />
          <Text style={styles.header}>Welcome to Adrenaline Fitness!</Text>

          {/* Weekly Calendar */}
          <View style={styles.weekDisplay}>
            <Text style={styles.weekTitle}>Days of the Week</Text>
            <Text style={styles.weekDays}>M     T     W     T     F    S     S</Text>
          </View>

          {/* Workouts & Step Counter */}
          <View style={styles.rowContainer}>
            <View style={styles.workoutTracker}>
              <Text style={styles.trackerText}>Workouts Completed This Week</Text>
              <Text style={styles.completedCount}>4</Text>
            </View>

            <View style={styles.stepsTracker}>
              <Text style={styles.trackerText}>Steps Taken Today</Text>
              <Text style={styles.stepCount}>12,345</Text>
            </View>
          </View>

          {/* Calorie Tracker & Heart Rate Tracker */}
          <View style={styles.rowTwoContainer}>
            <View style={styles.calorieTracker}>
              <Text style={styles.trackerText}>Calories Burned</Text>
              <Text style={styles.calorieCount}>653</Text>
            </View>

            <View style={styles.heartRate}>
              <Text style={styles.text}>Avg. Heart Rate</Text>
              <Text style={styles.heartCount}>89</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, 
  },
  scrollContainer: {
    flexGrow: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 254, 254, 0.67)',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    color: '#F5F5F5',
    fontSize: 20,
    marginTop: 10,
  },
  header: {
    color: '#070B47',
    fontSize: 20,
    marginTop: 10,
  },
  weekDisplay: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#070B47',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  weekTitle: {
    fontSize: 30,
    color: '#F5F5F5',
  },
  weekDays: {
    fontSize: 25,
    paddingTop: 15,
    color: '#8E8982',
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  workoutTracker: {
    padding: 20,
    backgroundColor: '#8E8982',
    borderRadius: 10,
    alignItems: 'center',
    width: '45%',
  },
  stepsTracker: {
    padding: 20,
    backgroundColor: '#070B47',
    borderRadius: 10,
    alignItems: 'center',
    width: '45%',
  },
  stepCount: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#8E8982',
  },
  rowTwoContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    marginTop: 15,
  },
  calorieTracker: {
    padding: 20,
    backgroundColor: '#8E8982',
    borderRadius: 10,
    alignItems: 'center',
    width: '45%',
  },
  calorieCount: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#070B47',
  },
  heartRate: {
    padding: 20,
    backgroundColor: '#070B47',
    borderRadius: 10,
    alignItems: 'center',
    width: '45%',
  },
  heartCount: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#8E8982',
  },
  trackerText: {
    fontSize: 18,
    color: '#F5F5F5',
  },
  completedCount: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#070B47',
    marginTop: 5,
  },
});