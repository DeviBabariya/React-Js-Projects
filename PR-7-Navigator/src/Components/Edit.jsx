import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Container, Form } from "react-bootstrap";
import { getStorageData, setStorageData } from "../Services/StorageData";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const initialState = {
    id: "",
    title: "",
    desc: "",
    price: "",
    category: "",
    image: "",
  };

  const [inputForm, setInputForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const data = getStorageData();
    const product = data.find(p => p.id === id);
    if (product) {
      setInputForm(product);
    }
  }, [id]);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
    setErrors(prev => ({ ...prev, [name]: "" })); // clear error on change
  };

  const validateForm = () => {
    const err = {};
    if (!inputForm.title.trim()) err.title = "Title is required.";
    if (!inputForm.desc.trim()) err.desc = "Description is required.";
    if (!inputForm.price || parseFloat(inputForm.price) <= 0) err.price = "Price must be a positive number.";
    if (!inputForm.category) err.category = "Category is required.";
    if (!inputForm.image.trim()) err.image = "Image URL is required.";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = getStorageData();
    const updatedData = data.map(product =>
      product.id === id ? inputForm : product
    );
    setStorageData(updatedData);
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Container style={{ maxWidth: "600px", width: "100%" }}>
        <h2 className="text-center mb-4 mt-5">Edit Product Page</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={inputForm.title}
              onChange={handleChanged}
              isInvalid={!!errors.title}
            />
            <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="desc"
              value={inputForm.desc}
              onChange={handleChanged}
              isInvalid={!!errors.desc}
            />
            <Form.Control.Feedback type="invalid">{errors.desc}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={inputForm.price}
              onChange={handleChanged}
              isInvalid={!!errors.price}
            />
            <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              name="category"
              value={inputForm.category}
              onChange={handleChanged}
              isInvalid={!!errors.category}
            >
              <option value="">Select Category</option>
              <option value="Skincare">Skincare</option>
              <option value="Hair">Hair</option>
              <option value="Fashion">Fashion</option>
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
              value={inputForm.image}
              onChange={handleChanged}
              isInvalid={!!errors.image}
            />
            <Form.Control.Feedback type="invalid">{errors.image}</Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" className="d-block mx-auto mt-4 edit-btn">
            Update Product
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default EditProduct;
