import React, { ReactNode } from "react";
import { createContext, isValidElement, useContext, useState } from "react"
interface Task {
    title: string;
    description: string;
}
interface TaskContext {
    tasks: Task[];
    addTask: (task: Task) => void;
}
const TaskContext = createContext<TaskContext | undefined> (undefined);
export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTask] = useState<Task[]>([]);
  
    const addTask = (task: Task) => {
      setTask([...tasks, task]);
    };
  
    return (
      <TaskContext.Provider value={{ tasks, addTask }}>
        {children}
      </TaskContext.Provider>
    );
};
export const useTask = () => {
    const context = useContext(TaskContext);
    if (!context) {
      throw new Error("useTask debe usarse dentro de un TareasProvider");
    }
    return context;
  };