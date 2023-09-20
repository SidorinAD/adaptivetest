import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/mainPages/mainPages";
import { Layout } from "./shared/ui/layout/layout";

export default function App() {
  return (
    <Routes>
      <Route path="/adaptivetest" element={<Layout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
}
