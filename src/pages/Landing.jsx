import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="top-illustration"></div>

      <div className="bottom">
        <h1 className="title">Welcome to PopX</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit.
        </p>

        <button className="btn btn-primary" onClick={() => navigate("/signup")}>
          Create Account
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}
