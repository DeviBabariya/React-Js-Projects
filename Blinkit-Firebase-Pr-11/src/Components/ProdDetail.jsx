import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Row, Col, Card, Badge } from "react-bootstrap";
import { deleteProductAsync } from "../Services/Actions/productAction";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoArrowBackOutline } from "react-icons/io5";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.productReducer);

    const product = products.find((p) => String(p.id) === String(id));

    if (!product) {
        return <div className="text-center mt-5">Product not found.</div>;
    }


    return (
        <Container className="py-4">
            <Button variant="outline-success" onClick={() => navigate(-1)}>
                <IoArrowBackOutline className="me-1" />
            </Button>

            <Row className="mt-5">
                <Col md={6}>
                    <Card className="shadow-sm border-0">
                        <Card.Img variant="top" src={product.image}
                            style={{
                                height: "400px", objectFit: "contain", backgroundColor: "#f8f9fa",
                            }} />
                    </Card>
                </Col>

                <Col >
                    <div className="ms-4 mt-5">
                        <h4 className="fw-bold mt-1 mb-2">{product.title}</h4>
                        <Badge bg="success" className="mb-2 mt-3 fs-6">{product.amount}</Badge>
                        <h5 className="text-success fw-bold mt-2">₹{product.price}</h5>
                        <p className="mt-3 mb-2">{product.desc}</p>

                        <div className="mt-4 d-flex gap-3">
                            <Button variant="success" onClick={() => navigate(`/edit-product/${product.id}`)}>
                                <FaRegEdit className="me-1" />Edit Details</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;
