import generateUniqueId from "generate-unique-id";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Button, Container, Form } from "react-bootstrap";
import { getStorageData, setStorageData } from "../Services/StorageData";

const AddProduct = () => {
  const navigate = useNavigate();

  const initialState = {
    title: "",
    desc: "",
    price: "",
    category: "",
    image: "",
  };

  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({ ...prev, [name]: "" })); 
  };

  const validateForm = () => {
    const err = {};
    if ( form.title.length < 5) err.title = "Title is required and must be at least 3 characters.";
    if (form.desc.length < 10) err.desc = "Description is required and must be at least 5 characters.";
    if (!form.price || parseFloat(form.price) <= 0) err.price = "Price must be a positive number.";
    if (!form.category) err.category = "Category is required.";
    if (!form.image.trim()) err.image = "Image URL is required.";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const id = generateUniqueId({ length: 6, useLetters: false });
    const newProduct = { ...form, id };
    const data = getStorageData();
    data.push(newProduct);
    setStorageData(data);
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Container style={{ maxWidth: "600px", width: "100%" }}>
        <h2 className="text-center mb-4 mt-5">Add Product Page</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              isInvalid={!!errors.title}
              placeholder="Enter product title"
            />
            <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="desc"
              value={form.desc}
              onChange={handleChange}
              isInvalid={!!errors.desc}
              placeholder="Enter description"
            />
            <Form.Control.Feedback type="invalid">{errors.desc}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              isInvalid={!!errors.price}
              placeholder="Enter price"
            />
            <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              name="category"
              value={form.category}
              onChange={handleChange}
              isInvalid={!!errors.category}
            >
              <option value="">Select Category</option>
              <option value="Skincare">Skincare</option>
              <option value="Hair">Hair</option>
              <option value="Appliances">Appliances</option>
              <option value="Make-Up">Make-Up</option>
              <option value="Fragnance">Fragnance</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.category}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              isInvalid={!!errors.image}
              placeholder="Enter image URL"
            />
            <Form.Control.Feedback type="invalid">{errors.image}</Form.Control.Feedback>
          </Form.Group>

          <div className="text-center">
            <Button type="submit" className="mt-3 px-5 add-btn">Add Product</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default AddProduct;
