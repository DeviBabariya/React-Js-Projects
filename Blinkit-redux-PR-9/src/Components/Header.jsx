import { Container, Row, Col, Form, InputGroup, Navbar } from "react-bootstrap";
import logo from "../assets/logo.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import { IoBagAdd } from "react-icons/io5";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { searchProduct } from "../Services/Actions/productAction";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchProduct(search));
  };

  const handleClear = () => {
    setSearch("");
    dispatch(searchProduct(""));
    navigate("/");
  };

  return (
    <header className="border-bottom position-relative">
      <Container fluid>
        <Row className="align-items-center">
          <Col md="4" className="d-flex align-items-center gap-3">
            <Navbar.Brand href="/">
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

          <Col md="5">
            <form onSubmit={handleSearch} >
              <InputGroup style={{ background: '#f8f8f8'  }}>
                <InputGroup.Text
                  className="bg-transparent border-0"
                  onClick={handleSearch}
                  style={{ cursor: "pointer" }}
                >
                  <IoSearch className="fs-5 search" />
                  
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Search by title or price"
                  className=" border-0 ps-0"
                  style={{ background: '#f8f8f8' }}
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <InputGroup.Text
                  className="bg-transparent border-0"
                  onClick={handleClear}
                  style={{ cursor: "pointer" }}
                >
                    <IoCloseCircle className="fs-5 text-secondary clear" />
                  
                </InputGroup.Text>
              </InputGroup>
            </form>
          </Col>

          <Col md="3" className="text-end">
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
