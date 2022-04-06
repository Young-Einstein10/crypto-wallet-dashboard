import Content from "./components/Content";
import Navbar from "./components/Navbar";
import RightSideBar from "./components/RightSidebar";
import Sidebar from "./components/Sidebar";

import "./global.css";

function App() {
  return (
    <section className="main-section">
      <Sidebar />

      <div className="content-wrapper">
        <Content />
        <RightSideBar />
        <Navbar />
      </div>
    </section>
  );
}

export default App;
