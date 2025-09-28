import React, { useState, useEffect, useMemo, useCallback } from 'react'

// 7️⃣ Challenges
// Easy ★ — Expensive Square
// Input box for number.
// Show square of number.
// Use useMemo to avoid recalculation when typing into an unrelated text field.
// Hint: Without useMemo, square recalculates on every keystroke.

// Medium ★★ — Optimized Todo List
// Todo list with addTodo function.
// TodoItem is memoized with React.memo.
// Use useCallback to avoid re-render of all items when adding new todo.
// ALREADY DONE BOTH CHALLENGE 

// Hard ★★★ — Search + Filter with Memo

// Input field for search.
// Large list of 500+ fake users.
// Use useMemo to filter users efficiently when search term changes.
// Use Tailwind for layout.
// Extra: Log when filtering runs → verify useMemo reduces calculations.

type User = {
    id: string
    name: string
}


const Challenge7 : React.FC = () => {
    const [users, setUsers] = useState<User[]>([])
    const [search, setSearch] = useState<string>("")

    // Fetch a large list of users (500+) using randomuser.me
    const fetchUsers = useCallback(async () => {
        try {
            const res = await fetch("https://randomuser.me/api/?results=500")
            const data = await res.json()
            const mappedUsers: User[] = data.results.map((u: any) => ({
                id: u.login.uuid,
                name: `${u.name.first} ${u.name.last}`
            }))
            setUsers(mappedUsers)
        } catch (error) {
            alert("Error while fetching users: " + error)
        }
    }, [])

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    // Memoized filtered users
    const filteredUsers = useMemo(() => {
        console.log("Filtering users...")
        return users.filter(user => 
            user.name.toLowerCase().includes(search.toLowerCase())
        )
    }, [users, search])

    return (
        <div className="p-6">
            <input 
                type="text"
                className="border p-2 mb-4 w-full"
                placeholder="Search users..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <ul className="space-y-2">
                {filteredUsers.map(user => (
                    <li key={user.id} className="p-2 border rounded shadow hover:bg-gray-100">
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Challenge7
