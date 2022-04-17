import React from "react";
import { Route, Routes } from "react-router-dom";
import MockmanEs from "mockman-js";
import { Archive, Home, Labels, Login, Notes, Signup, Trash } from "../Pages";
export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/labels" element={<Labels />} />
      <Route path="archive" element={<Archive />} />
      <Route path="/trash" element={<Trash />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/mock" element={<MockmanEs />} />
    </Routes>
  );
};
