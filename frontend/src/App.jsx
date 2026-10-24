
import { useState } from "react";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="container">
      <h1>WebChat</h1>

      <h2>{isLogin ? "Login" : "Sign Up"}</h2>

      <form>
        {!isLogin && (
          <input
            type="text"
            placeholder="Enter your name"
            required
          />
        )}

        <input
          type="email"
          placeholder="Enter your email"
          required
        />

        <input
          type="password"
          placeholder="Enter your password"
          required
        />

        <button type="submit">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      {isLogin ? (
        <p>
          Don't have an account?{" "}
          <a href="#" onClick={(e) => {
            e.preventDefault();
            setIsLogin(false);
          }}>
            Sign Up
          </a>
        </p>
      ) : (
        <p>
          Already have an account?{" "}
          <a href="#" onClick={(e) => {
            e.preventDefault();
            setIsLogin(true);
          }}>
            Login
          </a>
        </p>
      )}
    </div>
  );
}

export default App;
