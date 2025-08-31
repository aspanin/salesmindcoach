import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Card from '@/components/ui/Card';
import Progress from '@/components/ui/Progress';
import Badge from '@/components/ui/Badge';
import { SkillId } from '@/entities/skill';
import { useNavigation } from 'expo-router';

interface SkillCardProps {
  skillId: SkillId;
  progress: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skillId, progress }) => {
  const navigation = useNavigation();

  const getSkillTitle = () => {
    switch (skillId) {
      case 'resilience':
        return 'Emotional Resilience';
      case 'focus':
        return 'Self-Organization and Focus';
      case 'empathy':
        return 'Empathy and Active Listening';
      case 'cognitiveFlex':
        return 'Cognitive Flexibility';
      case 'assertiveness':
        return 'Confidence and Assertiveness';
      case 'recovery':
        return 'Energy Recovery';
      case 'nvc':
        return 'Constructive Communication';
      case 'callAnxiety':
        return 'Managing Call Anxiety';
      case 'objection':
        return 'Handling Objections';
      case 'goals':
        return 'Goal Setting and Motivation';
      default:
        return 'Unknown Skill';
    }
  };

  const handleSkillPress = () => {
    navigation.navigate(`skill-details/${skillId}`);
  };

  return (
    <TouchableOpacity onPress={handleSkillPress}>
      <Card style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>{getSkillTitle()}</Text>
          <Badge>{skillId}</Badge>
        </View>
        <Progress percentage={progress} />
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SkillCard;
