import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar";
import Time from "./time";
import Weather from "./weather";
import TodoList from "./todolist";

const Home = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<p>home</p>}/> */}
        <Route path="time" element={<Time />} />
        <Route path="weather" element={<Weather />} />
        <Route path="todo" element={<TodoList />} />
      </Routes>
    </>
  );
};

export default Home;
