import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Profile' }} />
      <Stack.Screen 
        name="account" 
        options={{ title: 'Create Account', presentation: 'modal' }} 
      />
      <Stack.Screen 
        name="login"  
        options={{ title: 'Login', presentation: 'modal' }} 
      />
    </Stack>
  );
}
