import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { registerAsync } from "../../Services/Actions/userAction";
import './Signing.css';


const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, isCreated } = useSelector((state) => state.userReducer);
  const intialState = {
    email: "",
    password: "",
    cpass: "",
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

    console.log("Submit", inputForm);
    dispatch(registerAsync(inputForm));
  };

  useEffect(() => {
    if (isCreated) {
      navigate("/signIn");
    }
  }, [isCreated]);
  return (
    <>
      <Container className=" signin-container mt-3">
        <h2>Sing Up </h2>
        {error ? <p>{error}</p> : ""}
        <Form className="mt-4 signin-form" onSubmit={handleSubmit}>
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
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Confirm Password
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="password"
                placeholder="Enter Confirm Password"
                name="cpass"
                value={inputForm.cpass}
                onChange={handleChanged}
              />
            </Col>
          </Form.Group>
          <Button type="submit">Sign Up</Button>
        </Form>
        <p className="mt-4">
          Already Have an Account ?  {" "}
          <Link className="" to={"/signIn"}>
           Login
          </Link>{" "}
        </p>
      </Container>
    </>
  );
};

export default SignUp;
