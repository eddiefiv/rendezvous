import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
            <Stack.Screen name="createPost" options={{headerShown: false}} />
            <Stack.Screen name="charityPost" options={{headerShown: false}} />
        </Stack>
    );
}