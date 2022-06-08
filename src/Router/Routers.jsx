import React from "react";
import { Route, Routes } from "react-router-dom";
import MockmanEs from "mockman-js";
import { Archive, Home, Labels, Login, Notes, Signup, Trash } from "../Pages";
import { RequireAuth } from "../RequireAuth";
export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/labels"
        element={
          <RequireAuth>
            <Labels />
          </RequireAuth>
        }
      />
      <Route
        path="archive"
        element={
          <RequireAuth>
            <Archive />
          </RequireAuth>
        }
      />
      <Route
        path="/trash"
        element={
          <RequireAuth>
            <Trash />
          </RequireAuth>
        }
      />
      <Route
        path="/notes"
        element={
          <RequireAuth>
            <Notes />
          </RequireAuth>
        }
      />
      <Route path="/mock" element={<MockmanEs />} />
    </Routes>
  );
};
