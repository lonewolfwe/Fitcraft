import { WorkoutPlan } from '../types/workout'
import { Trash2 } from 'lucide-react'

interface WorkoutPlanCardProps {
  plan: WorkoutPlan
  onDelete: (id: string) => void
}

export default function WorkoutPlanCard({ plan, onDelete }: WorkoutPlanCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold capitalize">
            {plan.goal.replace('-', ' ')} Workout
          </h3>
          <p className="text-sm text-gray-500">
            {plan.duration} minutes · {plan.equipment.replace('-', ' ')}
          </p>
        </div>
        <button
          onClick={() => onDelete(plan.id)}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3">
        {plan.exercises.map((exercise, index) => (
          <div key={index} className="border-l-2 border-blue-500 pl-4">
            <h4 className="font-medium">{exercise.name}</h4>
            <p className="text-sm text-gray-600">
              {exercise.sets} sets × {exercise.reps} reps
            </p>
            <p className="text-sm text-gray-500">{exercise.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
