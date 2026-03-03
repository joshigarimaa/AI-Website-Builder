import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import useGetCurrentUser from "./hooks/useGetCurrentUser";

export const serverUrl = "http://localhost:3000";

const App = () => {
  const { user, loading } = useGetCurrentUser();

  if (loading) return <p>Loading...</p>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;