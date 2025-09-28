import React, { useState, useEffect } from "react";

// ------------------------- Type Definition -----------------------
type User = {
  id: number;
  name: string;
  email: string;
};

const Day6: React.FC = () => {
  // ------------------------- Timer State -------------------------
  const [count, setCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  // ------------------------- Users State -------------------------
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // ------------------------- Timer Logic -------------------------
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  // ------------------------- Fetch Users -------------------------
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data: User[] = await res.json();
      setUsers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-blue-600 text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Timer</h1>

      <div className="text-3xl font-mono mb-6">Seconds: {count}</div>

      {/* Timer Buttons */}
      <div className="space-x-4 mb-6">
        <button
          onClick={() => setIsRunning(false)}
          className="px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
        >
          Pause
        </button>
        <button
          onClick={() => setIsRunning(true)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Resume
        </button>
        <button
          onClick={() => {
            setCount(0);
            setIsRunning(false);
          }}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Reset
        </button>
        <button
          onClick={fetchUsers}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Refresh Users
        </button>
      </div>

      {/* Users List */}
      <div className="mt-6 space-y-2 w-full max-w-md">
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              className="p-3 border rounded hover:bg-gray-100 transition"
            >
              <p className="font-bold">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Day6;
