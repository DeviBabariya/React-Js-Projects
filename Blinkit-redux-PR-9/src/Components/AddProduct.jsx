import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";
import generateUniqueId from "generate-unique-id";
import { useDispatch } from "react-redux";
import { addProduct } from "../Services/Actions/productAction";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  if (inputForm.desc.length < 3) err.desc = "Description is required and must be at least 3 characters.";
  if (!inputForm.price || parseFloat(inputForm.price) <= 0) err.price = "Price must be a positive number.";
  if (!inputForm.image.trim()) err.image = "Image URL is required.";

  setErrors(err);
  return Object.keys(err).length === 0;
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    let id = generateUniqueId({ length: 6, useLetters: false });
    inputForm.id = id;

    dispatch(addProduct(inputForm));
    navigate("/");
  };

 

  return (
    <>
      <Container style={{ maxWidth: "600px", width: "100%" }}>
        <h1 className="mt-4">Add New Product</h1>
        <Form className="mt-4"  onSubmit={handleSubmit}>
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
                placeholder="Enter Amount of product in (Kg , g , L , ml  , units)"
                name="desc"
                value={inputForm.desc}
                onChange={handleChanged}
                isInvalid={!!errors.desc}
              />
            <Form.Control.Feedback type="invalid">{errors.desc}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group  className="mb-3">
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


          <Form.Group  className="mb-3">
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

          <Button type="submit" className="mt-2 submit-add">Add Product</Button>
        </Form>
      </Container>
    </>
  );
};

export default AddProduct;
