import { Card, Col, Container, Row, Button } from "react-bootstrap";
import './Details.css'

const Details = ({ patients, onEdit, onDelete }) => {
  return (
    <Container>
      <Row>
        <div className="box p-5 border text-white my-5">
           <h1 className="text-center mt-4 fw-bold">Patient Details</h1>
        </div>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-4 mt-3">
        {patients.map(patient => (
          <Col key={patient.id}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="text-primary fw-bold">{patient.fullName}</Card.Title>
                <Card.Text><strong>Age:</strong> {patient.age}</Card.Text>
                <Card.Text><strong>Gender:</strong> {patient.gender}</Card.Text>
                <Card.Text><strong>Contact:</strong> {patient.contact}</Card.Text>
                <Card.Text><strong>Department:</strong> {patient.department}</Card.Text>
                <Card.Text><strong>Disease:</strong> {patient.disease}</Card.Text>
                <Card.Text><strong>Admit Date:</strong> {patient.admitDate}</Card.Text>
                <Card.Text><strong>Ward:</strong> {patient.wardNo}</Card.Text>

                <Button variant="warning" className="me-2" onClick={() => onEdit(patient)}>Update</Button>
                <Button variant="danger" onClick={() => onDelete(patient.id)}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Details;


