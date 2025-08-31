import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useScores } from '@/store/scores';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/Button';
import Progress from '@/components/ui/Progress';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ResultsScreen = () => {
  const { scores } = useScores();
  const router = useRouter();

  const handleGeneratePlan = async () => {
    try {
      await AsyncStorage.setItem('skillTestDone', 'true');
      router.replace('/(tabs)');
    } catch (e) {
      console.error('Error saving skill test status:', e);
      router.replace('/(tabs)');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Results</Text>
      {scores &&
        Object.entries(scores).map(([skill, score]) => (
          <View key={skill} style={styles.skillSection}>
            <Text style={styles.skillTitle}>{skill}</Text>
            <Progress percentage={score} />
          </View>
        ))}
      <Button title="Generate Plan" onPress={handleGeneratePlan} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  skillSection: {
    marginBottom: 20,
  },
  skillTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ResultsScreen;
