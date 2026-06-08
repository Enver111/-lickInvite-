import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Templates from "./pages/Templates/Templates";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/templates" element={<Templates />} />
    </Routes>
  );
}

export default App;
