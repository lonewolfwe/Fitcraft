import { WorkoutPreferences, WorkoutGoal, Equipment, Duration } from '../types/workout'
import { Dumbbell, Clock, Target } from 'lucide-react'

interface PreferencesFormProps {
  onSubmit: (preferences: WorkoutPreferences) => void
}

export default function PreferencesForm({ onSubmit }: PreferencesFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    onSubmit({
      goal: formData.get('goal') as WorkoutGoal,
      equipment: formData.get('equipment') as Equipment,
      duration: formData.get('duration') as Duration
    })
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 p-6 bg-white rounded-lg shadow-sm">
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Target className="w-4 h-4" />
            Fitness Goal
          </label>
          <select
            name="goal"
            className="w-full p-2 border rounded-md bg-white"
            required
          >
            <option value="strength">Build Strength</option>
            <option value="cardio">Improve Cardio</option>
            <option value="flexibility">Increase Flexibility</option>
            <option value="weight-loss">Weight Loss</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Dumbbell className="w-4 h-4" />
            Available Equipment
          </label>
          <select
            name="equipment"
            className="w-full p-2 border rounded-md bg-white"
            required
          >
            <option value="none">No Equipment</option>
            <option value="basic">Basic (Dumbbells, Resistance Bands)</option>
            <option value="full-gym">Full Gym Access</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Clock className="w-4 h-4" />
            Workout Duration (minutes)
          </label>
          <select
            name="duration"
            className="w-full p-2 border rounded-md bg-white"
            required
          >
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="45">45 minutes</option>
            <option value="60">60 minutes</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Generate Workout Plan
      </button>
    </form>
  )
}
