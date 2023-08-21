import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Time from "./pages/time";
// import Todo from './pages/todo';
import "./App.css";
import Weather from "./pages/weather";
import TodoList from "./pages/todolist";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="time" element={<Time />} />
          <Route path="weather" element={<Weather />} />
          <Route path="todo" element={<TodoList />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
