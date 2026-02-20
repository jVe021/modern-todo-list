"use client";
import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onToggleComplete }) => {
    if (tasks.length === 0) {
        return (
            <div className="text-center py-12 px-4 rounded-xl bg-white/5 border border-dashed border-white/10">
                <p className="text-white/40 text-lg">No tasks yet. Add one above!</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between mb-4 px-2">
                <h3 className="text-xl font-bold text-white">Your Tasks</h3>
                <span className="text-sm bg-white/10 px-3 py-1 rounded-full text-indigo-200 font-mono">
                    {tasks.filter((t) => !t.isCompleted).length} pending
                </span>
            </div>
            <div className="space-y-3">
                {tasks.map((task, i) => (
                    <TaskItem
                        key={i}
                        index={i}
                        task={task}
                        onDelete={onDelete}
                        onToggleComplete={onToggleComplete}
                    />
                ))}
            </div>
        </div>
    );
};

export default TaskList;
