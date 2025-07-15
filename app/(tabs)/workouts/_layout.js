import { Stack } from 'expo-router';
export default function WorkoutsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Workouts' }} />
      <Stack.Screen name="Completed" options={{ title: 'Completed' }} />
      <Stack.Screen name="Demo" options={{ title: 'Demo' }} />
    </Stack>
  );
}
