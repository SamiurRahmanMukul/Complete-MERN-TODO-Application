import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import NotFound from "./NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
