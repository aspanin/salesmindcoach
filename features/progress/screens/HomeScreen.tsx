import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button } from '@/components/ui/Button';
import KPIcard from '@/features/progress/components/KPIcard';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>My Progress</Text>
      <KPIcard title="Tasks Completed Today" value="3" />
      <KPIcard title="Tasks Completed This Week" value="15" />
      <KPIcard title="Current Streak" value="7 days" />
      <Button title="Start Focus Block" onPress={() => {}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
