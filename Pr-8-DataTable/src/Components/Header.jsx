import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router";
import Logo from "../assets/logo.png"
import { IoMdAdd } from "react-icons/io";

const Header = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary fixed-top shadow">
        <Container>
          <Navbar.Brand href="/">
               <img src={Logo} alt="logo" width = "120px" className="my-2"/>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Link to={"/add-product"} className=" py-2 px-3 text-decoration-none text-white fw-semibold" style={{backgroundColor:"#E80071", borderRadius:"5px"}}><IoMdAdd className="mb-1 fs-5"/> Add Product</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;