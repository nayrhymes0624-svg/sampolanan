"use client";
import { api } from "@/lib/apimongodb";
import { useEffect, useState } from "react";

interface User {
  _id: string;
  name: string;
  email: string;
  user: string;
}

export default function MongodbSamp() {
  //const for update
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //CREATE POST
  const addUser = async () => {
    await api.post("/users", {
      name,
      email,
    });
    alert("Adding succes!");
    fetchUsers();
    const data = await api.get("/users");
    console.log(data);
  };

  //READ OR GET
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const data = await api.get("/users");

    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //UPDATE PUT
  const updateUser = async () => {
    try {
      const data = await api.put("/users", {
        id,
        name,
        email,
      });

      if (data.success) {
        alert("User updated!");

        fetchUsers();

        setId("");
        setName("");
        setEmail("");
      }
    } catch (error) {
      console.error(error);

      alert("Update failed");
    }
  };

  //DELETE
  const deleteUser = async (id: string) => {
    const confirmed = confirm("Delete this user?");
    if (!confirmed) return;
    try {
      const data = await api.delete("/users", {
        id,
      });

      alert("User deleted!");

      fetchUsers();
    } catch (error) {
      alert("Delete failed");
    }
  };

  return (
    <main className="p-10 flex flex-col gap-4 max-w-md">
      <h1>Add or Update User</h1>
      <input
        type="text"
        placeholder="User ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="text"
        placeholder="New Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="email"
        placeholder="New Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />
      {/* CREATE */}
      <button onClick={addUser} className="bg-black text-white p-2 rounded">
        Add User
      </button>
      {/* UPDATE */}
      <button onClick={updateUser} className="bg-black text-white p-2 rounded">
        Update User
      </button>

      {/* READ */}
      <h1 className="text-3xl font-bold mb-6">Users List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <div className="space-y-4">
          {users.map((user) => (
            <div key={user._id} className="border p-4 rounded">
              <p>
                <strong>ID:</strong> {user._id}
              </p>
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              {/* DELETE */}
              <button
                onClick={() => deleteUser(user._id)}
                className="mt-3 px-4 py-2 border rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
