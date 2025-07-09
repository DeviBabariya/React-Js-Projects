import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import logo from '../assets/BlogImages/header.png';
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineShoppingBag, HiOutlineMenuAlt3 } from "react-icons/hi";
import './Header.css';
import { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className={`custom-navbar ${scrolled || expanded ? 'scrolled' : ''}`}
    >
      <Container className="d-flex justify-content-between align-items-center" style={{ maxWidth: '1200px' }}>
        <Navbar.Brand href="#">
          <img src={logo} alt="header-logo" width={150} />
        </Navbar.Brand>

        {/* Custom Toggle Button */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0 bg-transparent d-lg-none">
          <HiOutlineMenuAlt3 size={28} color={'#fff'} />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
          {/* Nav Links */}
          <Nav className="index-header ps-lg-5 ms-auto text-center text-lg-start">
            <Nav.Link href="#home" className="nav-link">HOME</Nav.Link>

            <NavDropdown title="MENU" id="menu-dropdown" className="nav-link-custom dropdown-custom">
              <NavDropdown.Item href="#about-us">Menu list</NavDropdown.Item>
              <NavDropdown.Item href="#contact">Menu grid</NavDropdown.Item>
              <NavDropdown.Item href="#shop-grid">Special Pizza</NavDropdown.Item>
              <NavDropdown.Item href="#404">All pizza</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="BLOG" id="blog-dropdown" className="nav-link-custom dropdown-custom">
              <NavDropdown.Item href="#blog-left">Blog Leftside</NavDropdown.Item>
              <NavDropdown.Item href="#blog-right">Blog Rightside</NavDropdown.Item>
              <NavDropdown.Item href="#blog-detail">Blog Detail</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#reservation" className="nav-link">RESERVATION</Nav.Link>

            <NavDropdown title="PAGES" id="pages-dropdown" className="nav-link-custom dropdown-custom">
              <NavDropdown.Item href="#about-us">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#shop-grid">Shop Grid</NavDropdown.Item>
              <NavDropdown.Item href="#404">404</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Right Side Icons */}
          <div className="d-flex align-items-center gap-3 flex-column flex-lg-row mt-3 mt-lg-0 text-center text-lg-start">
            <div className="d-flex align-items-center text-white phone-icon-hover">
              <IoCallOutline className="me-2 ms-lg-5 header-icon" />
              +91 123 456 789
            </div>

            <div className="d-flex align-items-center text-white">
              <HiOutlineShoppingBag className="me-2 header-icon" />
              0 items - <span className="ms-1">$0.00</span>
            </div>

            <button className="order-button mt-2 mt-lg-0">
              ORDER ONLINE
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

