import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Templates from "./pages/Templates/Templates";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/templates" element={<Templates />} />
      </Routes>
    </>
  );
}

export default App;
