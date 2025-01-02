import { useState } from "react";
import "./Login.css";
import GameSelector from "../../components/GameSelector/GameSelector";

export default function Login() {
  return (
    <>
      <div className="game-container-login">
        <GameSelector />
      </div>
    </>
  );
}
