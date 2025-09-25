Awesome 🚀 Let’s move to **Day 2** of our MERN + TypeScript + Tailwind journey.

---

# 📅 Day 2 – Setting Up React + TypeScript + Tailwind

Today we’ll:
✅ Install project tools
✅ Create a new **React app** with **TypeScript**
✅ Add **Tailwind CSS**
✅ Run the app

---

## 1️⃣ Install Tools (if not installed)

### Node.js

* Download & install: [https://nodejs.org](https://nodejs.org) (LTS version recommended).
* Verify:

```bash
node -v
npm -v
```

### Git

* Download: [https://git-scm.com](https://git-scm.com)
* Verify:

```bash
git --version
```

### VS Code

* Download: [https://code.visualstudio.com](https://code.visualstudio.com)
* Install extensions:

  * `ES7+ React Snippets`
  * `Prettier` (for formatting)
  * `Tailwind CSS IntelliSense`
  * `TypeScript React`

---

## 2️⃣ Create React + TypeScript App

We’ll use **Vite** (faster than Create React App).

Run:

```bash
npm create vite@latest my-app
```

👉 During setup:

* Project name → `my-app`
* Framework → `React`
* Variant → `TypeScript`

Go into project:

```bash
cd my-app
npm install
npm run dev
```

You should see a running app at **[http://localhost:5173/](http://localhost:5173/)** 🎉

---

## 3️⃣ Setup Tailwind CSS

Inside your project folder:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

This creates:

* `tailwind.config.js`
* `postcss.config.js`

### Edit `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Edit `src/index.css`

Replace everything with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 4️⃣ Test Tailwind

Open `src/App.tsx` → replace with:

```tsx
function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">
        🚀 React + TypeScript + Tailwind Setup Complete!
      </h1>
    </div>
  );
}

export default App;
```

Run:

```bash
npm run dev
```

👉 You should see a **dark background** with white text 🎉

---

## 5️⃣ Key Takeaways Today

✔ You installed **React + TypeScript** using Vite.
✔ Added **Tailwind** successfully.
✔ App is running at `localhost:5173`.

---

✅ **Your task today:**

* Finish setup.
* Push project to **GitHub** (good habit from Day 2).

---

👉 Tomorrow (Day 3) → we’ll dive into **JSX & TSX basics**: how to write React code in TypeScript.

Do you want me to also give you the **Git commands** to push your new project to GitHub so you start tracking progress from Day 2?
