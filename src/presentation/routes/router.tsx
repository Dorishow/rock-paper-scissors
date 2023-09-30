import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { GenerateRoom, Play } from "@presentation/pages";

export const paths = {
  room: {
    generate: "/",
    play: "/play",
  },
};

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.room.generate} element={<GenerateRoom />} />
        <Route path={`${paths.room.play}/:id`} element={<Play />} />
        <Route path="*" element={<>Page not found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
