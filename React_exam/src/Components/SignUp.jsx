import  { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAsync } from "../Services/Actions/userActions.js";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isCreated, isLoading } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAsync(form));
  };

  // ✅ Redirect to Sign In page when registered successfully
  useEffect(() => {
    if (isCreated) {
      navigate("/signin");
    }
  }, [isCreated, navigate]);

  return (
    <div className="container-fluid mt-5" style={{ maxWidth: "600px" }}>
      <h2 className=" mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

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
          className="btn btn-success w-50"
          style={{marginLeft:"140px"}}
        >
          {"Sign Up"}
        </button>
      </form>

      <p className="mt-3">
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>

      {error && <p className="text-danger mt-3">{error}</p>}
    </div>
  );
};

export default SignUp;

