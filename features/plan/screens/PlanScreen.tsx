import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import TaskCard from '@/features/plan/components/TaskCard';
import TaskDetailSheet from '@/features/plan/components/TaskDetailSheet';

const tasks = [
  { id: '1', title: '90-Second Reset', description: 'Physiological exhale + 4-7-8 breathing.', steps: ['Exhale completely', 'Inhale for 4 seconds', 'Hold for 7 seconds', 'Exhale for 8 seconds'] },
  { id: '2', title: 'Daily Sprint Plan', description: '2×50-min focus blocks + 1 "unloading".', steps: ['Plan your focus blocks', 'Execute focus blocks', 'Unload tasks and thoughts'] },
  { id: '3', title: 'Role-play dialogue with AI client', description: 'Achieve 3 reflections in 2 minutes.', steps: ['Start the role-play', 'Reflect client statements', 'Achieve 3 reflections in 2 minutes'] },
];

const PlanScreen = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const openSheet = (task) => {
    setSelectedTask(task);
    setIsSheetOpen(true);
  };

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  const renderItem = ({ item }: { item: any }) => (
    <TaskCard title={item.title} description={item.description} onPress={() => openSheet(item)} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      {selectedTask && (
        <TaskDetailSheet
          isOpen={isSheetOpen}
          onClose={closeSheet}
          title={selectedTask.title}
          description={selectedTask.description}
          steps={selectedTask.steps}
        />
      )}
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

export default PlanScreen;
