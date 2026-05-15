export interface Exercise {
  id: string;
  name: string;
  muscle: string;
  image: string[];
  video: string;
}

export interface WorkoutExercise {
  id: string
  order: number
  series: number
  repetitions: number
  observation?: string
}

export interface Workout {
  id: string;
  training: string
  exercises: WorkoutExercise[];
}

export interface CustomExercise extends Exercise {
  order: number;
  series: number;
  repetitions: number;
  id: string;
}