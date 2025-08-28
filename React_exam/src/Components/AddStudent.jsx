import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import generateUniqueId from "generate-unique-id";
import { useDispatch, useSelector } from "react-redux";
import { addStudentAsync } from "../Services/Actions/studentAction";
import "./AddStudent.css";

const AddStudent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 const { user } = useSelector((state) => state.auth);

  const { isCreated, isError } = useSelector((state) => state.studentReducer || {});

  const initialState = {
    id: "",
    fullName: "",
    dob: "",
    age: "",
    gender: "",
    email: "",
    contact: "",
    standard: "",
    rollNo: "",
    admitDate: "",
    address: "",
    classNo: "",
    image: "",
  };

  const [inputForm, setInputForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChanged = (e) => {
    const { name, value } = e.target; 
     setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const validate = () => {
    let err = {};

    if (!inputForm.fullName.trim()) err.fullName = "Please enter full name";
    if (!inputForm.dob) err.dob = "Please select date of birth";
    if (!inputForm.age || Number(inputForm.age) <= 0) err.age = "Enter valid age";
    if (!inputForm.gender) err.gender = "Please select gender";

    if (!inputForm.email.trim()) {
      err.email = "Please enter email";
    } else if (!/^\S+@\S+\.\S+$/.test(inputForm.email)) {
      err.email = "Enter valid email";
    }

    if (!inputForm.contact.trim()) {
      err.contact = "Please enter contact number";
    } else if (!/^\d{10}$/.test(inputForm.contact)) {
      err.contact = "Enter 10-digit contact number";
    }

    if (!inputForm.standard.trim()) err.standard = "Please select standard";
    if (!inputForm.rollNo.trim()) err.rollNo = "Please enter roll number";
    if (!inputForm.admitDate) err.admitDate = "Please select admit date";
    if (!inputForm.address.trim()) err.address = "Please enter address";
    if (!inputForm.classNo.trim()) err.classNo = "Please enter class number";
    if (!inputForm.image.trim()) err.image = "Please enter image URL";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const id = generateUniqueId({ length: 6, useLetters: false });
      const newStudent = { ...inputForm, id };
      dispatch(addStudentAsync(newStudent));
      navigate("/");
    }
  };

  useEffect(() => {
    if (isCreated) {
      setInputForm(initialState);
      navigate("/"); 
    }
  }, [isCreated, navigate]);

    useEffect(()=> {
    if(!user){
      navigate("/signin")
    }
  }, [user]);

  return (
    <Container className="add-student-container">
      <h1>Add New Student</h1>
      {isError && <p className="text-danger">{isError}</p>}

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3 mt-3">
          <Col>
            <Form.Label>Full Name:</Form.Label>
            <Form.Control
              name="fullName"
              value={inputForm.fullName}
              onChange={handleChanged}
              isInvalid={!!errors.fullName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.fullName}
            </Form.Control.Feedback>
          </Col>

          <Col>
            <Form.Label>Image :</Form.Label>
            <Form.Control
              type="text"
              name="image"
              placeholder="Enter student image (URL)"
              value={inputForm.image}
              onChange={handleChanged}
              isInvalid={!!errors.image}
            />
            <Form.Control.Feedback type="invalid">
              {errors.image}
            </Form.Control.Feedback>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Label>DOB:</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              value={inputForm.dob}
              onChange={handleChanged}
              isInvalid={!!errors.dob}
            />
            <Form.Control.Feedback type="invalid">
              {errors.dob}
            </Form.Control.Feedback>
          </Col>
          <Col>
            <Form.Label>Age:</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={inputForm.age}
              onChange={handleChanged}
              isInvalid={!!errors.age}
            />
            <Form.Control.Feedback type="invalid">
              {errors.age}
            </Form.Control.Feedback>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Label>Contact:</Form.Label>
            <Form.Control
              name="contact"
              value={inputForm.contact}
              onChange={handleChanged}
              isInvalid={!!errors.contact}
            />
            <Form.Control.Feedback type="invalid">
              {errors.contact}
            </Form.Control.Feedback>
          </Col>
          <Col>
            <Form.Label>Gender:</Form.Label>
            <div>
              {["Female", "Male", "Other"].map((g) => (
                <Form.Check
                  inline
                  key={g}
                  label={g}
                  type="radio"
                  name="gender"
                  value={g}
                  checked={inputForm.gender === g}
                  onChange={handleChanged}
                />
              ))}
              {errors.gender && <div className="text-danger">{errors.gender}</div>}
            </div>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Label>Standard:</Form.Label>
            <Form.Select
              name="standard"
              value={inputForm.standard}
              onChange={handleChanged}
              isInvalid={!!errors.standard}
            >
              <option value="">Select Standard</option>
              {[...Array(12)].map((_, i) => (
                <option key={i + 1}>{`${i + 1}th`}</option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.standard}
            </Form.Control.Feedback>
          </Col>
          <Col>
            <Form.Label>Roll No:</Form.Label>
            <Form.Control
              name="rollNo"
              value={inputForm.rollNo}
              onChange={handleChanged}
              isInvalid={!!errors.rollNo}
            />
            <Form.Control.Feedback type="invalid">
              {errors.rollNo}
            </Form.Control.Feedback>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={inputForm.email}
              onChange={handleChanged}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Col>
          <Col>
            <Form.Label>Admission Date:</Form.Label>
            <Form.Control
              type="date"
              name="admitDate"
              value={inputForm.admitDate}
              onChange={handleChanged}
              isInvalid={!!errors.admitDate}
            />
            <Form.Control.Feedback type="invalid">
              {errors.admitDate}
            </Form.Control.Feedback>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Label>Address:</Form.Label>
            <Form.Control
              name="address"
              value={inputForm.address}
              onChange={handleChanged}
              isInvalid={!!errors.address}
            />
            <Form.Control.Feedback type="invalid">
              {errors.address}
            </Form.Control.Feedback>
          </Col>
          <Col>
            <Form.Label>Class No:</Form.Label>
            <Form.Control
              type="number"
              name="classNo"
              value={inputForm.classNo}
              onChange={handleChanged}
              isInvalid={!!errors.classNo}
            />
            <Form.Control.Feedback type="invalid">
              {errors.classNo}
            </Form.Control.Feedback>
          </Col>
        </Row>

        <div className="text-center">
          <Button type="submit" className="mt-2 mb-3 submit-add">
            Add Student
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddStudent;

