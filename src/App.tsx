import { useState, useEffect } from 'react'
import { WorkoutPlan, WorkoutPreferences } from './types/workout'
import { generateWorkoutPlan } from './utils/workoutGenerator'
import PreferencesForm from './components/PreferencesForm'
import WorkoutPlanCard from './components/WorkoutPlanCard'
import { Dumbbell } from 'lucide-react'
import './index.css'

function App() {
  const [workoutPlans, setWorkoutPlans] = useState<WorkoutPlan[]>([])

  useEffect(() => {
    const savedPlans = localStorage.getItem('workoutPlans')
    if (savedPlans) {
      setWorkoutPlans(JSON.parse(savedPlans))
    }
  }, [])

  const handlePreferencesSubmit = (preferences: WorkoutPreferences) => {
    const exercises = generateWorkoutPlan(preferences)
    const newPlan: WorkoutPlan = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...preferences,
      exercises,
    }

    const updatedPlans = [newPlan, ...workoutPlans]
    setWorkoutPlans(updatedPlans)
    localStorage.setItem('workoutPlans', JSON.stringify(updatedPlans))
  }

  const handleDeletePlan = (id: string) => {
    const updatedPlans = workoutPlans.filter(plan => plan.id !== id)
    setWorkoutPlans(updatedPlans)
    localStorage.setItem('workoutPlans', JSON.stringify(updatedPlans))
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <div className="flex items-center justify-center gap-2">
            <Dumbbell className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Workout Plan Generator
            </h1>
          </div>
          <p className="mt-2 text-gray-600">
            Create your personalized workout routine in seconds
          </p>
        </header>

        <PreferencesForm onSubmit={handlePreferencesSubmit} />

        {workoutPlans.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Your Workout Plans</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {workoutPlans.map(plan => (
                <WorkoutPlanCard
                  key={plan.id}
                  plan={plan}
                  onDelete={handleDeletePlan}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
