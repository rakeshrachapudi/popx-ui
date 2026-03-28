import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = () => {
    localStorage.setItem("user", JSON.stringify(form));
    navigate("/profile");
  };

  return (
    <div className="container">
      <h1 className="title">
        Create your <br /> PopX account
      </h1>

      {[
        "Full Name",
        "Phone Number",
        "Email Address",
        "Password",
        "Company Name",
      ].map((f) => (
        <div className="form-group" key={f}>
          <label className="label">
            {f}
            <span>*</span>
          </label>
          <input className="input" name={f} onChange={handleChange} />
        </div>
      ))}

      <div className="radio-group">
        <p>
          Are you an Agency?
          <span>*</span>
        </p>
        <label>
          <input
            type="radio"
            name="agency"
            value="yes"
            onChange={handleChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="agency"
            value="no"
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <button className="btn btn-primary" onClick={submit}>
        Create Account
      </button>
    </div>
  );
}
