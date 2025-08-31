import { SkillScores, DevelopmentPlan, SkillId, Drill } from '@/entities/skill';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
const chanceOfError = (probability: number) => Math.random() < probability;

export async function fetchSkillTest(): Promise<any> {
  await delay(500);
  if (chanceOfError(0.05)) {
    throw new Error('Failed to fetch skill test');
  }
  return {}; // Replace with actual data
}

export async function submitSkillTest(answers: any): Promise<SkillScores> {
  await delay(500);
  if (chanceOfError(0.05)) {
    throw new Error('Failed to submit skill test');
  }
  const scores: SkillScores = {
    resilience: Math.floor(Math.random() * 100),
    focus: Math.floor(Math.random() * 100),
    empathy: Math.floor(Math.random() * 100),
    cognitiveFlex: Math.floor(Math.random() * 100),
    assertiveness: Math.floor(Math.random() * 100),
    recovery: Math.floor(Math.random() * 100),
    nvc: Math.floor(Math.random() * 100),
    callAnxiety: Math.floor(Math.random() * 100),
    objection: Math.floor(Math.random() * 100),
    goals: Math.floor(Math.random() * 100),
  };
  return scores;
}

export async function generatePlan(scores: SkillScores): Promise<DevelopmentPlan> {
  await delay(500);
  if (chanceOfError(0.05)) {
    throw new Error('Failed to generate plan');
  }
  const focusSkills = Object.entries(scores)
    .sort(([, a], [, b]) => a - b)
    .slice(0, 3)
    .map(([k]) => k) as SkillId[];
  return {
    horizonDays: 7,
    focusSkills,
    daily: Array.from({ length: 7 }).map((_, i) => ({ day: i + 1, drills: [] })),
  };
}

export async function getSkillsCatalog(): Promise<Drill[]> {
  await delay(500);
  if (chanceOfError(0.05)) {
    throw new Error('Failed to get skills catalog');
  }
  return []; // Replace with actual data
}

export async function logDrillCompletion(drillId: string, payload: any): Promise<any> {
  await delay(500);
  if (chanceOfError(0.05)) {
    throw new Error('Failed to log drill completion');
  }
  return {}; // Replace with actual data
}

export async function getProgress(): Promise<any> {
  await delay(500);
  if (chanceOfError(0.05)) {
    throw new Error('Failed to get progress');
  }
  return {}; // Replace with actual data
}

export async function getSimScoring(sample: string): Promise<any> {
  await delay(500);
  if (chanceOfError(0.05)) {
    throw new Error('Failed to get sim scoring');
  }
  return {}; // Replace with actual data
}
