import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInAsync } from "../Services/Actions/userActions.js";
import { useNavigate , Link} from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, user } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInAsync(form));
  };


  if (user) {
    navigate("/"); 
  }

  return (
    <div className="container-fluid mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-50 mb-3"
          style={{marginLeft:"140px"}}
        >
          {"Sign In"}
        </button>
      </form>
      

      {error && <p className="text-danger mt-3">{error}</p>}
      <p>
        Don’t have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;
