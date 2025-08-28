import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Row, Col, Card, Badge, ListGroup } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import { getAllStudentAsync } from "../Services/Actions/studentAction";

const ViewDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.studentReducer);

  useEffect(() => {
    if (!students || students.length === 0) {
      dispatch(getAllStudentAsync());
    }
  }, [students, dispatch]);

  const student = students.find((s) => String(s.id) === String(id));

  if (!student) {
    return <div className="text-center mt-5">Student not found.</div>;
  }
const handleEdit = (id) => navigate(`/edit/${id}`);

  return (
    <Container className="py-4">
      <Button variant="outline-success" onClick={() => navigate(-1)}>
        <IoArrowBackOutline className="me-1" /> Back
      </Button>

      <Row className="mt-5">
        <Col md={5}>
          <Card className="shadow-sm border-0">
            <Card.Img
              variant="top"
              src={student.image}
              style={{
                height: "350px",
                objectFit: "contain",
                backgroundColor: "#f8f9fa",
              }}
              alt={student.fullName}
            />
          </Card>
        </Col>

        <Col md={7}>
          <div className="ms-4 mt-2">
            <h3 className="fw-bold mb-2">{student.fullName}</h3>
            <Badge bg="success" className="mb-2 fs-6">{student.standard}</Badge>
            <ListGroup variant="flush" className="mb-3">
              <ListGroup.Item><strong>Roll No:</strong> {student.rollNo}</ListGroup.Item>
              <ListGroup.Item><strong>Class No:</strong> {student.classNo}</ListGroup.Item>
              <ListGroup.Item><strong>Date of Birth:</strong> {student.dob}</ListGroup.Item>
              <ListGroup.Item><strong>Age:</strong> {student.age}</ListGroup.Item>
              <ListGroup.Item><strong>Gender:</strong> {student.gender}</ListGroup.Item>
              <ListGroup.Item><strong>Contact:</strong> {student.contact}</ListGroup.Item>
              <ListGroup.Item><strong>Email:</strong> {student.email}</ListGroup.Item>
              <ListGroup.Item><strong>Admission Date:</strong> {student.admitDate}</ListGroup.Item>
              <ListGroup.Item><strong>Address:</strong> {student.address}</ListGroup.Item>
            </ListGroup>
            <div className="mt-4 d-flex gap-3">
              <Button variant="success" onClick={() => handleEdit(student.id)}>
                <FaRegEdit className="me-1" /> Edit Details
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewDetails;
