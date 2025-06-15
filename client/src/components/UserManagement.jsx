import * as Dialog from "@radix-ui/react-dialog";
import * as Label from "@radix-ui/react-label";
import { useState, useEffect } from "react";
import * as Toast from "@radix-ui/react-toast";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState({
    title: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_URL}/users`);
      const data = await response.json();
      setUsers(data);
    } catch {
      showToast("Error", "Failed to fetch users");
    }
  };

  const handleAddUser = async () => {
    if (!newUser.name || !newUser.email) {
      showToast("Error", "Please fill in all fields");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Failed to add user");
      }

      const addedUser = await response.json();
      setUsers([...users, addedUser]);
      setNewUser({ name: "", email: "" });
      showToast("Success", "User added successfully");
    } catch (error) {
      showToast("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      const response = await fetch(`${API_URL}/users/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      setUsers(users.filter((user) => user.id !== id));
      showToast("Success", "User deleted successfully");
    } catch (error) {
      showToast("Error", error.message);
    }
  };

  const showToast = (title, description) => {
    setToastMessage({ title, description });
    setToastOpen(true);
  };

  return (
    <Toast.Provider swipeDirection="right">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">User Management</h2>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Add User
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50" />
              <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-full max-w-md">
                <Dialog.Title className="text-xl font-semibold mb-4">
                  Add New User
                </Dialog.Title>
                <div className="space-y-4">
                  <div>
                    <Label.Root
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </Label.Root>
                    <input
                      id="name"
                      type="text"
                      value={newUser.name}
                      onChange={(e) =>
                        setNewUser({ ...newUser, name: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded"
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <Label.Root
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </Label.Root>
                    <input
                      id="email"
                      type="email"
                      value={newUser.email}
                      onChange={(e) =>
                        setNewUser({ ...newUser, email: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded"
                      disabled={isLoading}
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-6">
                  <Dialog.Close asChild>
                    <button
                      className="border border-gray-300 px-4 py-2 rounded"
                      disabled={isLoading}
                    >
                      Cancel
                    </button>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <button
                      onClick={handleAddUser}
                      className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                      disabled={isLoading}
                    >
                      {isLoading ? "Adding..." : "Add User"}
                    </button>
                  </Dialog.Close>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td
                    colSpan="3"
                    className="px-6 py-4 text-center text-sm text-gray-500"
                  >
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <Toast.Root
          className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex items-start gap-3"
          open={toastOpen}
          onOpenChange={setToastOpen}
        >
          <div className="flex-1">
            <Toast.Title className="font-semibold">
              {toastMessage.title}
            </Toast.Title>
            <Toast.Description className="text-gray-600">
              {toastMessage.description}
            </Toast.Description>
          </div>
          <Toast.Close className="text-gray-400 hover:text-gray-600">
            ✕
          </Toast.Close>
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-0 right-0 flex flex-col p-4 gap-2 w-[390px] max-w-[100vw] m-0 z-50 outline-none" />
      </div>
    </Toast.Provider>
  );
}

export default UserManagement;
