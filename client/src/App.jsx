import * as Tabs from "@radix-ui/react-tabs";
import UserManagement from "./components/UserManagement";
import KitchenSink from "./components/KitchenSink";

function App() {
  return (
    <div className="container mx-auto py-8">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-center">Radix UI Components</h1>
        <Tabs.Root defaultValue="user-management">
          <Tabs.List className="flex border-b">
            <Tabs.Trigger
              value="user-management"
              className="px-4 py-2 border-b-2 border-transparent hover:border-gray-300"
            >
              User Management
            </Tabs.Trigger>
            <Tabs.Trigger
              value="kitchen-sink"
              className="px-4 py-2 border-b-2 border-transparent hover:border-gray-300"
            >
              Kitchen Sink
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="user-management" className="p-4">
            <UserManagement />
          </Tabs.Content>
          <Tabs.Content value="kitchen-sink" className="p-4">
            <KitchenSink />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
}

export default App;
