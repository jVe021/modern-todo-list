"use client";
import React from "react";

const TaskItem = ({ task, index, onDelete, onToggleComplete }) => {
    return (
        <div
            className={`group flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 mb-3 rounded-xl transition-all duration-300 border ${task.isCompleted
                ? "bg-emerald-50/10 border-emerald-500/30 opacity-75"
                : "bg-white/10 backdrop-blur-sm border-white/10 hover:bg-white/20 hover:scale-[1.01]"
                }`}
        >
            <div className="flex-1 min-w-0 pr-4 w-full">
                <h3
                    className={`text-lg font-semibold truncate transition-colors ${task.isCompleted ? "line-through text-emerald-200" : "text-white"
                        }`}
                >
                    {task.title}
                </h3>
                {task.desc && (
                    <p
                        className={`text-sm mt-1 break-words ${task.isCompleted ? "line-through text-emerald-200/60" : "text-gray-300"
                            }`}
                    >
                        {task.desc}
                    </p>
                )}
            </div>

            <div className="flex gap-3 mt-4 sm:mt-0 w-full sm:w-auto">
                <button
                    onClick={() => onToggleComplete(index)}
                    className={`flex-1 sm:flex-none py-2 px-4 rounded-lg font-medium text-sm transition-all focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 ${task.isCompleted
                        ? "bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 ring-emerald-500"
                        : "bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 ring-indigo-500"
                        }`}
                >
                    {task.isCompleted ? "Undo" : "Complete"}
                </button>
                <button
                    onClick={() => onDelete(index)}
                    className="flex-1 sm:flex-none py-2 px-4 rounded-lg font-medium text-sm bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 transition-all focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
