import { Container, Row, Col, Form, InputGroup, Navbar, Button } from "react-bootstrap";
import logo from "../assets/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoBagAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import { logOutAsync } from "../Services/Actions/userAction";
import { LuLogOut } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";


const Header = () => {

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  const handleLogOut = () => {
    dispatch(logOutAsync());
  }


  return (
    <header className="border-bottom position-sticky top-0 bg-white z-2">
      <Container fluid>
        <Row className="align-items-center">
          <Col md="4" className="d-flex align-items-center gap-3">
            <Navbar.Brand as={Link} to="/">
              <img src={logo} alt="logo" className="my-2 me-2 ms-3" />
            </Navbar.Brand>
            <div className="vertical-line"></div>
            <div className="delivery-time mx-auto pt-3 pb-2">
              <h5 className="mb-0">
                <strong> Delivery in 11 minutes </strong>
              </h5>
              <div className="text-address ">
                Surat, Gujarat, India <IoMdArrowDropdown className="fs-4 mb-1" />
              </div>
            </div>
          </Col>

          <Col md="2">

          </Col>
          <Col md="4" className="text-end p-0 ">
                {
                user ? <>
                  <span className="me-3"> <FaRegCircleUser className=" fs-5 mb-1 text-success" /> {user.email}</span> 
                  <Button onClick={handleLogOut} className="text-white border border-warning me-3" style={{background:"#f8cb46" , color:"white" , fontWeight:"700"}}><LuLogOut className="fs-5" /></Button>
                </>
                  :
                  <Link className="text-black me-3" to={"/signIn"}>
                    SignIn
                  </Link>
              }
          </Col>

          <Col md="2" className="text-end pe-5">
            <Navbar.Text>
            
              <Link
                to={"/add-product"}
                className="add-btn text-decoration-none px-3 py-3 me-4 rounded-3 text-success border border-success"
              >
                <IoBagAdd className="mb-1 fs-5 me-2" />
                Add Product
              </Link>
            </Navbar.Text>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;  