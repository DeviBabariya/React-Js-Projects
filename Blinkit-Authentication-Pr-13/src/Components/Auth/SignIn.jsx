import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signInAsync, signInWithGoogleAsync } from "../../Services/Actions/userAction";
import './Signing.css';
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user, error} = useSelector(state => state.userReducer);
  const intialState = {
    email: "",
    password: "",
  };
  const [inputForm, setInputForm] = useState(intialState);


  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInAsync(inputForm));
  };

  const handleGoogleLogin = () => {
    dispatch(signInWithGoogleAsync());
  }

  useEffect(() => {
    if(user){
        navigate("/")
    }
  }, [user]);
  return (
    <>
      <Container className="signin-container mt-3">
        <h2>Sign In </h2>
        {error ? <p>{error}</p> : ""}
        <Form className="signin-form mt-4" onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Enter Email"
                name="email"
                value={inputForm.email}
                onChange={handleChanged}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                value={inputForm.password}
                onChange={handleChanged}
              />
            </Col>
          </Form.Group>
          <Button type="submit" className="">Sign In</Button>
        </Form>
        <br />
          <Button onClick={handleGoogleLogin} className="google-btn mb-4"> <FcGoogle  className="fs-3 me-2"/>SignIn with Google</Button>
        <p>Create an Account ? <Link className="" to={"/signUp"}>SignUP</Link> </p>
      </Container>
    </>
  );
};

export default SignIn;
