import "./BlogDetails.css";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import DetailsImage from "../assets/BlogImages/blog-2.jpg"
import Tag from "../assets/BlogImages/tag.jpg";
import Comment1 from "../assets/BlogImages/comment-1.jpg";
import Comment2 from "../assets/BlogImages/comment-2.jpg";
import Comment3 from "../assets/BlogImages/comment-3.jpg";
import { FaReply } from "react-icons/fa";


const BlogDetails = () => {
    return (

        <div className="blog">

            {/* Banner  Section */}
            <div className="banner text-center text-white">
                <h1 className=" banner-title pt-4 mt-2">BLOG</h1>
                <div className="banner-text">
                    <ul className="list-unstyled d-flex justify-content-center">
                        <li>
                            <a href="#">Home </a>
                        </li>
                        <li className="mx-1">/</li>
                        <li>
                            <a href="#">Blog </a>
                        </li>
                        <li className="mx-1">/</li>
                        <li className="ms-1">
                            Blog Detail
                        </li>
                    </ul>
                </div>
            </div>


            {/* Details Section */}
            <div className="blog-details">
                <Container style={{ maxWidth: '1200px' }}>
                    <Row>
                        <div className="details">
                            <div className="details-sec">
                                <div className="col">
                                    <div className="col-inner">
                                        <img src={DetailsImage} alt="blog-2" className="img-fluid w-100 my-5 pt-5 mb-0" />
                                        <ul className="list-unstyled d-flex  mt-4 fw-light text-black mb-1">
                                            <li className="me-4">By John Doe</li>
                                            <li className="mb-0"> 0 Comments</li>
                                        </ul>
                                        <h2 className="text-uppercase mt-2">Possession so comparison inquietude he conviction</h2>
                                        <p className="mt-3 fs-6 paragraph">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handfulThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful</p>

                                        <div className="blog-box">
                                            <p className=" mx-auto text-center py-5 mb-0">
                                                But I must explain to you how all this mistaken idea of denouncing       pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings
                                            </p>
                                        </div>

                                        <p className="fs-6 mb-0 paragraph">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handfulThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tags-list">
                            <Row>
                                <Col xxl={12}>
                                    <div className="tags-detail d-lg-flex mt-5">
                                        <div className="tags-title me-3">
                                            <h6>Tags:</h6>
                                        </div>
                                        <ul className="list-unstyled d-flex">
                                            <li>
                                                <a href="javascript:void(0)" className="text-decoration-none">Planning</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)" className="text-decoration-none">Business</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)" className="text-decoration-none">Fashion</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)" className="text-decoration-none">Consulting</a>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="tag-desc mb-5 my-3 p-4">
                            <div className="col">
                                <div className="tag-inner">
                                    <ul className="list-unstyled d-flex mb-0">
                                        <li>
                                            <img src={Tag} alt="tag-image" />
                                        </li>
                                        <li className="ms-4 my-auto">
                                            <h4 className="tag-desc-title text-uppercase">John Doe</h4>
                                            <p className="mb-0">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </Row>
                </Container>
            </div>


            {/* Comments Section */}

            <div className="comments">
                <Container>
                    <Row>
                        <div className="col-12">
                            <div className="comments-title">
                                <h2 className="text-uppercase mb-3">Comments</h2>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="comment-box border-top pt-4 pb-2">
                                <ul className="list-unstyled d-flex flex-column flex-sm-row justify-content-between gap-3">
                                    <li className="comment-img text-center">
                                        <img src={Comment1} alt="comment1" className="img-fluid" />
                                    </li>
                                    <li className="comment-text my-auto flex-grow-1">
                                        <h4>John Doe</h4>
                                        <p>
                                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
                                        </p>
                                    </li>
                                    <li className="comment-reply text-sm-end text-center my-auto">
                                        <a href="#" className="comment-btn btn text-white text-uppercase">
                                            <FaReply /> Reply
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="comment-box border-top pt-4 pb-2">
                                <ul className="list-unstyled d-flex flex-column flex-sm-row justify-content-between gap-3">
                                    <li className="comment-img text-center">
                                        <img src={Comment2} alt="comment2" className="img-fluid" />
                                    </li>
                                    <li className="comment-text flex-grow-1 my-auto">
                                        <h4>John Doe</h4>
                                        <p>
                                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
                                        </p>
                                    </li>
                                    <li className="comment-reply text-sm-end text-center my-auto">
                                        <a href="#" className="comment-btn btn text-white text-uppercase">
                                            <FaReply /> Reply
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="comment-box border-top pt-4 pb-2">
                                <ul className="list-unstyled d-flex flex-column flex-sm-row justify-content-between gap-3">
                                    <li className="comment-img text-center">
                                        <img src={Comment3} alt="comment3" className="img-fluid" />
                                    </li>
                                    <li className="comment-text flex-grow-1 my-auto">
                                        <h4>John Doe</h4>
                                        <p>
                                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
                                        </p>
                                    </li>
                                    <li className="comment-reply text-sm-end text-center my-auto">
                                        <a href="#" className="comment-btn btn text-white text-uppercase">
                                            <FaReply /> Reply
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>


            {/* Leave Section */}

            <div className="leave">
                <Container>
                    <h2 className="mb-4 fw-bold text-uppercase">Leave Your Comments</h2>
                    <Form>
                        <Row className="mb-3">
                            <div className="col-md-6 col-12">
                                <Form.Group controlId="formName">
                                    <Form.Control type="text" placeholder="Name" required />
                                </Form.Group>
                            </div>
                            <div className="col-md-6 col-12">
                                <Form.Group controlId="formEmail">
                                    <Form.Control type="text" placeholder="Email" className="email-field" required />
                                </Form.Group>
                            </div>
                        </Row>

                        <Form.Group controlId="formSubject" className="mb-3">
                            <Form.Control type="text" placeholder="Subject" required />
                        </Form.Group>

                        <Form.Group controlId="formMessage" className="mb-4">
                            <Form.Control as="textarea" rows={6} placeholder="Write Your Comment" />
                        </Form.Group>

                        <Button type="submit" className="rounded-pill px-4 py-3 submit-btn">
                            POST COMMENT
                        </Button>
                    </Form>
                </Container>
            </div>



        </div>




    )
}

export default BlogDetails;

