import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '@/components/ui/Card';

interface KPIcardProps {
  title: string;
  value: string;
}

const KPIcard: React.FC<KPIcardProps> = ({ title, value }) => {
  return (
    <Card style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 24,
    color: '#6495ED',
  },
});

export default KPIcard;
