import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SkillScores } from '@/entities/skill';

interface ScoresState {
  scores: SkillScores;
  setScores: (s: SkillScores) => void;
}

export const useScores = create<ScoresState>()(
  persist(
    (set) => ({
      scores: {
        resilience: 0,
        focus: 0,
        empathy: 0,
        cognitiveFlex: 0,
        assertiveness: 0,
        recovery: 0,
        nvc: 0,
        callAnxiety: 0,
        objection: 0,
        goals: 0,
      },
      setScores: (s: SkillScores) => set({ scores: s }),
    }),
    { name: 'scores', storage: createJSONStorage(() => AsyncStorage) }
  )
);
