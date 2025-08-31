export type SkillId =
  | 'resilience'
  | 'focus'
  | 'empathy'
  | 'cognitiveFlex'
  | 'assertiveness'
  | 'recovery'
  | 'nvc'
  | 'callAnxiety'
  | 'objection'
  | 'goals';

export interface SkillScores {
  [k in SkillId]: number;
} // 0–100

export interface DrillMetric {
  key: string; // e.g. 'return_to_activity_15m'
  value: number; // number/percentage/seconds
  ts: number;
}

export interface Drill {
  id: string;
  skill: SkillId;
  title: string;
  description: string;
  durationSec: number; // 60–600
  steps: string[]; // step-by-step instructions
  metrics: string[]; // metric keys
}

export interface DevelopmentPlan {
  horizonDays: number; // 7 or 30
  focusSkills: SkillId[]; // 2–4 skills with the worst %
  daily: Array<{ day: number; drills: string[] }>; // exercise ids for the day
}
