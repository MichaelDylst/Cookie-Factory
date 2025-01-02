import GameSelector from "./components/GameSelector/GameSelector";
import GamePage from "./components/GamePage/GamePage";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  )
}
