import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import SkillCard from '@/features/catalog/components/SkillCard';
import { SkillId } from '@/entities/skill';
import { skills } from '@/features/catalog/data/skills';

const CatalogScreen = () => {
  const [skillProgress, setSkillProgress] = useState<{ [key in SkillId]: number }>({
    resilience: 75,
    focus: 30,
    empathy: 90,
    cognitiveFlex: 50,
    assertiveness: 60,
    recovery: 80,
    nvc: 40,
    callAnxiety: 70,
    objection: 20,
    goals: 95,
  });

  const renderItem = ({ item }: { item: SkillId }) => (
    <SkillCard skillId={item} progress={skillProgress[item]} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={skills}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  listContainer: {
    paddingBottom: 20,
  },
});

export default CatalogScreen;
