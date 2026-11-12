import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../components/practice/Contact";
import Nav from "../components/practice/Nav";
import About from "../components/practice/About";
import Crud from "../components/practice/Crud";
import Home from "../components/practice/Home";
import Employee from "./../components/admin/Employee";
import Student from "./../components/admin/Student";
import Navigation from "./../components/admin/Navigation";
import Signup from "./Signup";
import Login from "./Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/practice" element={<Nav />}>
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="crud" element={<Crud />} />
        </Route>
        <Route path="/admin" element={<Navigation />}>
          <Route path="employee" element={<Employee />} />
          <Route path="student" element={<Student />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
