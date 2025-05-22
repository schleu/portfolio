export interface TodoList {
    [key: string]: {
      [key: string]: {
        tarefa: string;
        concluido: boolean;
      }[];
    };
  }