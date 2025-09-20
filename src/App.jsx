import { Routes, Route } from "react-router-dom";
import MynavBar from './components/MyNavbar.jsx';
import Problems from "./pages/problems.jsx";
import CodeEditor from "./pages/problemSolvingEditor.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
export default function App() {
  return (
    <div className="bg-dark">
      <MynavBar className=""></MynavBar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/problems" element={<Problems/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="problems/solve/:name" element={<CodeEditor/>} />
        <Route path="/signIn" element={<SignIn/>} />
        <Route path="/signUp" element={<SignUp/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}
