"use client";
import React, { useState, useEffect } from "react";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

const Page = () => {
  const [tasks, setTasks] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTaskHandler = (newTask) => {
    setTasks([...tasks, { ...newTask, isCompleted: false }]);
  };

  const deleteTaskHandler = (i) => {
    const copyTasks = [...tasks];
    copyTasks.splice(i, 1);
    setTasks(copyTasks);
  };

  const toggleCompleteHandler = (i) => {
    const copyTasks = [...tasks];
    copyTasks[i].isCompleted = !copyTasks[i].isCompleted;
    setTasks(copyTasks);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans selection:bg-indigo-500 selection:text-white">
      <div className="container mx-auto max-w-2xl px-4 py-12">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 mb-2 tracking-tight">
            TODO LIST
          </h1>
          <p className="text-gray-400 text-lg">Stay organized and get things done.</p>
        </header>

        <main>
          <TaskForm onSubmit={addTaskHandler} />

          <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 p-6">
            <TaskList
              tasks={tasks}
              onDelete={deleteTaskHandler}
              onToggleComplete={toggleCompleteHandler}
            />
          </div>
        </main>

        <footer className="mt-12 text-center text-gray-500 text-sm space-y-2">
          <p>© {new Date().getFullYear()} Jatin Verma • Frontend Developer</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/jVe021"
              target="_blank"
              className="hover:text-indigo-400 transition-colors duration-200 font-medium"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jatinverma021/"
              target="_blank"
              className="hover:text-indigo-400 transition-colors duration-200 font-medium"
            >
              LinkedIn
            </a>
            <a
              href="mailto:jatinverma.021@gmail.com"
              className="hover:text-indigo-400 transition-colors duration-200 font-medium"
            >
              Email
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Page;
