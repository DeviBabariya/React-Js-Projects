import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiAtBold } from 'react-icons/pi';
import { TfiLinkedin } from "react-icons/tfi";
import { Link } from 'react-router-dom';
// import { FaLinkedin } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="footer mt-4">
            <Container>
                <Row className="mb-5">
                    <Col md={4}>
                        <Row>
                            <Col md={12}>
                                <h5 className='text-start'>Useful Links</h5>
                            </Col>
                            <Col md={4} >
                                <ul className="list-unstyled">
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Terms</a></li>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Security</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </Col>
                            <Col md={4}>
                                <ul className="list-unstyled">
                                    <li><Link href="#">Partner</Link></li>
                                    <li><Link href="#">Franchise</Link></li>
                                    <li><Link href="#">Seller</Link></li>
                                    <li><Link href="#">Warehouse</Link></li>
                                    <li><Link href="#">Deliver</Link></li>
                                    <li><Link href="#">Resources</Link></li>
                                </ul>
                            </Col>
                            <Col md={4}>
                                <ul className="list-unstyled">
                                    <li><Link href="#">Recipes</Link></li>
                                    <li><Link href="#">Bistro</Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={8}>
                        <Row>
                            <Col md={12}>
                                <h5 className="text-sm-start text-center">
                                    Categories <Link className="text-success ms-2 fw-semibold" style={{fontSize: '14px'}}>see all</Link>
                                </h5>
                            </Col>
                            <Col md={4}>
                                <ul className="list-unstyled">
                                    <li><Link href="#">Vegetables & Fruits</Link></li>
                                    <li><Link href="#">Cold Drinks & Juices</Link></li>
                                    <li><Link href="#">Bakery & Biscuits</Link></li>
                                    <li><Link href="#">Dry Fruits, Masala & Oil</Link></li>
                                    <li><Link href="#">Paan Corner</Link></li>
                                    <li><Link href="#">Pharma & Wellness</Link></li>
                                    <li><Link href="#">Ice Creams & Frozen Desserts</Link></li>
                                    <li><Link href="#">Beauty & Cosmetics</Link></li>
                                    <li><Link href="#">Stationery Needs</Link></li>
                                    <li><Link href="#">E-Gift Cards</Link></li>

                                </ul>
                            </Col>
                            <Col md={4}>
                                <ul className="list-unstyled">
                                    <li><Link href="#">Dairy & Breakfast</Link></li>
                                    <li><Link href="#">Instant & Frozen Food</Link></li>
                                    <li><Link href="#">Sweet Tooth</Link></li>
                                    <li><Link href="#">Sauces & Spreads</Link></li>
                                    <li><Link href="#">Organic & Premium</Link></li>
                                    <li><Link href="#">Cleaning Essentials</Link></li>
                                    <li><Link href="#">Personal Care</Link></li>
                                    <li><Link href="#">Fashion & Accessories</Link></li>
                                    <li><Link href="#">Toys & Games</Link></li>
                                    <li><Link href="#">Rakhi Gifts</Link></li>


                                </ul>
                            </Col>
                            <Col md={4}>
                                <ul className="list-unstyled">
                                    <li><Link href="#">Munchies</Link></li>
                                    <li><Link href="#">Tea, Coffee & Health Drinks</Link></li>
                                    <li><Link href="#">Atta, Rice & Dal</Link></li>
                                    <li><Link href="#">Chicken, Meat & Fish</Link></li>
                                    <li><Link href="#">Baby Care</Link></li>
                                    <li><Link href="#">Home & Office</Link></li>
                                    <li><Link href="#">Pet Care</Link></li>
                                    <li><Link href="#">Electronics & Electricals</Link></li>
                                    <li><Link href="#">Print Store</Link></li>

                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>


                <Row className="align-items-center text-center bg-light text-md-start py-3">
                    <Col md={4}>
                        <p className="text-secondary mb-0 ms-5 ps-5"  style={{fontSize: '12px'}}>© Blink Commerce Private Limited, 2016-2025</p>
                    </Col>
                    <Col md={4} className="text-center my-2 my-md-0">
                        <span className="fw-bold text-secondary" style={{fontSize: '10px'}}>Download App</span>
                        <div className="d-inline-block ms-3">
                            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" height="35" className="me-2" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" height="35" />
                        </div>
                    </Col>
                    <Col md={4}>
                        <Link>
                            <FaFacebookF className="social-icon " />
                        </Link>
                        <Link>
                            <FaXTwitter className="social-icon" />
                        </Link>
                        <Link>
                            <FaInstagram className="social-icon" />
                        </Link>
                        <Link>
                            <FaLinkedinIn className="social-icon " />
                        </Link>
                        <Link>
                            <PiAtBold className="social-icon" />
                        </Link>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col>
                        <p className="text-secondary text-md-start mb-2 " style={{fontSize: '14px'}}>
                            “Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;