import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = {
      name: "Marry Doe",
      email: "marrydoe@gmail.com",
      password: "Marry Doe",
      company: "PopX",
      agency: "yes",
    };

    if (
      email.toLowerCase() === "marry doe" ||
      email.toLowerCase() === user.email
    ) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/profile");
    } else {
      alert("Only Marry Doe is allowed 😌");
    }
  };

  return (
    <div className="container">
      <h1 className="title">
        Signin to your <br /> PopX account
      </h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, <br />
        consectetur adipiscing elit.
      </p>

      <div className="form-group">
        <label className="label">Email Address</label>
        <input
          className="input"
          placeholder="Enter Marry Doe"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="label">Password</label>
        <input
          className="input"
          type="password"
          placeholder="marrydoe@gmail.com"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        className={`btn ${email ? "btn-primary" : "btn-disabled"}`}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
