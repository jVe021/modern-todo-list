# Modern React To-Do List 📝

A sleek, responsive, and functional To-Do List application built with **Next.js** and **Tailwind CSS**. Designed with a modern glassmorphism aesthetic and focused on user experience.

![Project Screenshot](https://via.placeholder.com/800x400?text=App+Screenshot+Coming+Soon)

## 🚀 Live Demo

[Link to Live Demo](https://your-vercel-app.vercel.app) *(Update this after deployment)*

## ✨ Features

- **Modern UI/UX**: Glassmorphism design with backdrop blurs, gradients, and smooth transitions.
- **Task Management**: Add, delete, and mark tasks as complete.
- **Smart Completion**: "Completing" a task strikes it through rather than deleting it, allowing you to track progress.
- **Data Persistence**: Tasks are saved to `localStorage`, so your list survives page refreshes.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: Custom SVG / Heroicons
- **Font**: Geist Sans (Next.js Optimization)
- **State Management**: React Hooks (`useState`, `useEffect`)

## 💻 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/jVe021/to-do-list.git
    cd to-do-list
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the app.

## 📂 Project Structure

```
├── app/
│   ├── components/      # Reusable UI components
│   │   ├── TaskForm.js  # Input form for new tasks
│   │   ├── TaskItem.js  # Individual task list item
│   │   └── TaskList.js  # Container for the task list
│   ├── globals.css      # Global styles & Tailwind directives
│   ├── layout.js        # Root layout definition
│   └── page.js          # Main application logic
├── public/              # Static assets
└── ...
```

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p>Star ⭐ this project if you find it useful!</p>
  <p>Developed by <a href="https://github.com/jVe021">Jatin Verma</a></p>
</div>
