import { useState } from "react";
import Sidebar from "./app/Sidebar";
import Header from "./app/Header";
import Main from "./app/Main";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="grid grid-cols-[auto_1fr] h-screen overflow-hidden">
      <Sidebar open={sidebarOpen} />
      <div className="flex flex-col overflow-hidden">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-grow overflow-auto">
          <Main />
        </main>
      </div>
    </div>
  );
}

export default App;
