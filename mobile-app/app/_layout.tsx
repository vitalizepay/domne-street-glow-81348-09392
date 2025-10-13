import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: 'Domine',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="product/[slug]"
          options={{
            title: 'Product Details',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="cart"
          options={{
            title: 'Shopping Cart',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="auth"
          options={{
            title: 'Account',
            headerShown: true,
          }}
        />
      </Stack>
    </>
  );
}
