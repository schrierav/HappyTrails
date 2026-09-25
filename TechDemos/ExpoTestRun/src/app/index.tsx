import { Platform, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo Demo</Text>

      <Text>
        I'm running on {Platform.OS}.
      </Text>

      {Platform.OS === 'ios' && (
        <Text>Steve Jobs is proud of you!</Text>
      )}

      {Platform.OS === 'android' && (
        <Text>I sense the presence of an android user</Text>
      )}

      {Platform.OS === 'web' && (
        <Text>Hi, grandma! How's the new computer working?</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});