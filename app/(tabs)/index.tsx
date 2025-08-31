import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@/components/ui/Button';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>My Progress Screen</Text>
      <Button title="Start Focus Block" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  message: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
});
