import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, updateProduct } from "../Services/Actions/productAction";

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product } = useSelector((state) => state.productReducer);
  const intialState = {
    id: "",
    title: "",
    desc: "",
    price: "",
    image: "",
  };
  const [inputForm, setInputForm] = useState(intialState);
  const [errors, setErrors] = useState({});


  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };


  const validateForm = () => {
    const err = {};
    if (inputForm.title.length < 5) err.title = "Title is required and must be at least 5 characters.";
    if (inputForm.desc.length < 3) err.desc = "Amount is required and must be at least 3 characters.";
    if (!inputForm.price || parseFloat(inputForm.price) <= 0) err.price = "Price must be a positive number.";
    if (!inputForm.image.trim()) err.image = "Image URL is required.";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    dispatch(updateProduct(inputForm));
    navigate("/");
  };

  useEffect(() => {
    if (product) {
      setInputForm(product)
    }
  }, [product])

  useEffect(() => {
    if (id) {
      dispatch(getProduct(id));
    }
  }, [id]);
  return (
    <>
      <Container style={{ maxWidth: "600px", width: "100%" }}>
        <h1 className="mt-4">Edit Product</h1>
        <Form className="mt-4" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label column sm="2">
              Title
            </Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter Title"
              name="title"
              value={inputForm.title}
              onChange={handleChanged}
              isInvalid={!!errors.title}
            />
            <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>

          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label column sm="2">
              Amount
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Description"
              name="desc"
              value={inputForm.desc}
              onChange={handleChanged}
              isInvalid={!!errors.desc}
            />
            <Form.Control.Feedback type="invalid">{errors.desc}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label column sm="2">
              Price (₹)
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Price"
              name="price"
              value={inputForm.price}
              onChange={handleChanged}
              isInvalid={!!errors.price}
            />
            <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>
          </Form.Group>



          <Form.Group className="mb-3">
            <Form.Label column sm="2">
              Image
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Image URL"
              name="image"
              value={inputForm.image}
              onChange={handleChanged}
              isInvalid={!!errors.image}
            />
            <Form.Control.Feedback type="invalid">{errors.image}</Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" className="submit-edit mt-2">Update Product</Button>
        </Form>
      </Container>
    </>
  );
};

export default EditProduct;
