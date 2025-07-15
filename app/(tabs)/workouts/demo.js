import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router'; // Import this

const videos = [
  { id: '1', title: 'Full Body Workout', videoId: 'cbKkB3POqaY' },
  { id: '2', title: 'HIIT Workout', videoId: 'yVUcHEOr450' },
  { id: '3', title: 'Strength Training', videoId: 'tj0o8aH9vJw' },
];

export default function DemoWorkoutScreen() {
  const { special } = useLocalSearchParams(); // Extract query params

  return (
    <View style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.text}>{special ? `Watch Some Demo ${special}` : 'Demo Workouts'}</Text>

        {/* Display some demo YouTube videos */}
        <FlatList
          data={videos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.videoItem}>
              <Image
                source={{ uri: `https://img.youtube.com/vi/${item.videoId}/0.jpg` }}
                style={styles.thumbnail}
              />
              <Text style={styles.videoTitle}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    color: '#070B47',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  videoItem: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#070B47',
    borderRadius: 15,
    width: 320,
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: 180,
  },
  videoTitle: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
    paddingBottom: 10,
  },
});