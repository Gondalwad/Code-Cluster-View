import { Routes, Route } from "react-router-dom";
import MynavBar from './components/MyNavbar.jsx';
import MyLogo from "./components/utils/Logo"
import Problems from "./pages/problems.jsx";

export default function App() {
  return (
    <>
      <MynavBar className=""></MynavBar>
      <Routes>
        <Route path="/" element={<MyLogo className="w-10"/>} />
        <Route path="/about" element={<MyLogo/>} />
        <Route path="/problems" element={<Problems/>} />
        <Route path="/contact" element={<MyLogo/>} />
      </Routes>
    </>
  );
}
