"use client";
import React, { useState } from "react";

const TaskForm = ({ onSubmit }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return; // Prevent empty titles
        onSubmit({ title, desc });
        setTitle("");
        setDesc("");
    };

    return (
        <form onSubmit={handleSubmit} className="mb-8 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
            <h2 className="text-2xl font-bold mb-4 text-white text-center">Add New Task</h2>
            <div className="flex flex-col gap-4">
                <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/80 border-0 focus:ring-2 focus:ring-indigo-500 text-gray-800 placeholder-gray-500 transition-all font-medium"
                    placeholder="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/80 border-0 focus:ring-2 focus:ring-indigo-500 text-gray-800 placeholder-gray-500 transition-all"
                    placeholder="Description (optional)"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                <button
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md mt-2"
                >
                    Add Task
                </button>
            </div>
        </form>
    );
};

export default TaskForm;
