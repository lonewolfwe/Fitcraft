export type WorkoutGoal = 'strength' | 'cardio' | 'flexibility' | 'weight-loss'
export type Equipment = 'none' | 'basic' | 'full-gym'
export type Duration = '15' | '30' | '45' | '60'

export interface Exercise {
  name: string
  sets: number
  reps: number
  description: string
}

export interface WorkoutPlan {
  id: string
  createdAt: string
  goal: WorkoutGoal
  equipment: Equipment
  duration: Duration
  exercises: Exercise[]
}

export interface WorkoutPreferences {
  goal: WorkoutGoal
  equipment: Equipment
  duration: Duration
}
