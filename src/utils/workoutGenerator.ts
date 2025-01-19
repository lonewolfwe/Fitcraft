import { Exercise, WorkoutPreferences } from '../types/workout'

const exerciseDatabase = {
  strength: {
    none: [
      { name: 'Push-ups', description: 'Keep your body straight and lower yourself to the ground' },
      { name: 'Squats', description: 'Stand with feet shoulder-width apart, lower as if sitting back' },
      { name: 'Plank', description: 'Hold a straight-arm plank position with core tight' },
    ],
    basic: [
      { name: 'Dumbbell Press', description: 'Press dumbbells overhead while standing' },
      { name: 'Dumbbell Rows', description: 'Bend over and row dumbbells to your chest' },
      { name: 'Resistance Band Pull-aparts', description: 'Hold band at shoulder height and pull apart' },
    ],
    'full-gym': [
      { name: 'Bench Press', description: 'Lie on bench and press barbell up' },
      { name: 'Deadlifts', description: 'Lift barbell from ground with straight back' },
      { name: 'Lat Pulldowns', description: 'Pull cable attachment down to chest' },
    ]
  },
  cardio: {
    none: [
      { name: 'High Knees', description: 'Run in place bringing knees to chest height' },
      { name: 'Jumping Jacks', description: 'Jump while spreading legs and raising arms' },
      { name: 'Mountain Climbers', description: 'Alternate bringing knees to chest in plank position' },
    ],
    basic: [
      { name: 'Jump Rope', description: 'Skip rope with both feet together' },
      { name: 'Resistance Band Runs', description: 'Run against band resistance' },
      { name: 'Dumbbell Step-ups', description: 'Step up onto platform holding dumbbells' },
    ],
    'full-gym': [
      { name: 'Treadmill Intervals', description: 'Alternate between sprint and recovery periods' },
      { name: 'Rowing Machine', description: 'Use proper form to pull and push' },
      { name: 'Stair Climber', description: 'Maintain steady pace on machine' },
    ]
  }
} as const

export function generateWorkoutPlan(preferences: WorkoutPreferences): Exercise[] {
  const { goal, equipment, duration } = preferences
  const availableExercises = exerciseDatabase[goal === 'weight-loss' ? 'cardio' : goal as keyof typeof exerciseDatabase]?.[equipment] || exerciseDatabase.strength.none

  const numExercises = Math.floor(parseInt(duration) / 15) * 2
  const exercises: Exercise[] = []

  for (let i = 0; i < numExercises && i < availableExercises.length; i++) {
    const exercise = availableExercises[i]
    exercises.push({
      name: exercise.name,
      description: exercise.description,
      sets: goal === 'cardio' ? 1 : 3,
      reps: goal === 'cardio' ? 60 : 12
    })
  }

  return exercises
}
