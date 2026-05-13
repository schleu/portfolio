interface Exercise {
  id: string;
  name: string;
  muscle: string;
  image: string;
  video: string;
}

interface WorkoutExercise {
  id: string
  order: number
  series: number
  repetitions: number
  observation?: string
}

interface Workout {
  id: string;
  training: string
  exercises: WorkoutExercise[];
}

interface CustomExercise extends Exercise {
  order: number;
  series: number;
  repetitions: number;
  id: string;
}