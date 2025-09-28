import React, { useState, useMemo } from 'react';

const Day7: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [dark, setDark] = useState<boolean>(false);

  // useMemo caches the calculation
  const double = useMemo(() => {
    console.log("Calculating double...");
    return count * 2;
  }, [count]); // recalculates only when count changes
  
  // usecallback


  return (
    <div className={dark ? "bg-black text-white p-4" : "bg-white text-black p-4"}>
      <h2>Count: {count}</h2>
      <h2>Double: {double}</h2>
      <button onClick={() => setCount(c => c + 1)} className="mr-2 px-3 py-2 border rounded">
        Increment
      </button>
      <button onClick={() => setDark(d => !d)} className="px-3 py-2 border rounded">
        Toggle Theme
      </button>
    </div>
  );
};

export default Day7;


// ====================================Real World Use================================

// useMemo

// import React, { useState, useMemo } from "react";

// const ProductList = ({ products }: { products: string[] }) => {
//   const [search, setSearch] = useState("");

//   // expensive filtering operation
//   const filteredProducts = useMemo(() => {
//     console.log("Filtering...");
//     return products.filter((p) =>
//       p.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [search, products]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search product..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <ul>
//         {filteredProducts.map((p, i) => (
//           <li key={i}>{p}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;




// Use Call back

// import React, { useState, useCallback } from "react";

// const Button = React.memo(({ onClick, label }: { onClick: () => void; label: string }) => {
//   console.log("Rendering Button:", label);
//   return <button onClick={onClick}>{label}</button>;
// });

// const Dashboard = () => {
//   const [count, setCount] = useState(0);

//   // Without useCallback -> child re-renders every time Dashboard re-renders
//   const increment = useCallback(() => {
//     setCount((c) => c + 1);
//   }, []);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <Button onClick={increment} label="Increment" />
//     </div>
//   );
// };

// export default Dashboard;


// Combine useMemo + useCallback

// import React, { useState, useMemo, useCallback } from "react";

// const TodoList = ({ todos, onAdd }: { todos: string[]; onAdd: (todo: string) => void }) => {
//   console.log("TodoList render");

//   const sortedTodos = useMemo(() => {
//     console.log("Sorting todos...");
//     return [...todos].sort();
//   }, [todos]);

//   return (
//     <div>
//       <button onClick={() => onAdd("New Task")}>Add Task</button>
//       <ul>
//         {sortedTodos.map((t, i) => (
//           <li key={i}>{t}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const App = () => {
//   const [todos, setTodos] = useState<string[]>([]);

//   const handleAdd = useCallback((todo: string) => {
//     setTodos((prev) => [...prev, todo]);
//   }, []);

//   return <TodoList todos={todos} onAdd={handleAdd} />;
// };

// export default App;
 