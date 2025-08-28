import { Container, Row, Col, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoMdPersonAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logOutAsync } from "../Services/Actions/userActions.js";
import "./Header.css";

const Header = () => {
 const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOutAsync());
    navigate("/signin");
  };
  return (
    <header className="position-sticky top-0 bg-white z-2 border-bottom position-relative">
      <Container fluid>
        <Row className="align-items-center">
          <Col md="4" className="d-flex gap-3">
            <Navbar.Brand href="/">
              <img src={logo} alt="logo" className=" header my-2 me-2 ms-3 " />
            </Navbar.Brand>

          </Col>

          <Col md="6" className="text-end d-flex justify-content-end ">
           <Navbar.Text>
              {user ? (
                <>
                  <span className="text-black me-3">Hello, {user.name || user.email}</span>
                  <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
               null
              )}
            </Navbar.Text>
          </Col>

          <Col md="2" className="text-end d-flex justify-content-center ">
            <Navbar.Text>
              
            <Link to={"/add-student"} className="button-header d-flex justify-content-center ">
              <IoMdPersonAdd className="me-2 mt-1" /> Add Student
            </Link>
          </Navbar.Text>
        </Col>
      </Row>
    </Container>
    </header >
  );
};

export default Header;
