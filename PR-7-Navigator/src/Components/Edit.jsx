import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getStorageData, setStorageData } from "../Services/StorageData";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const intialState = {
    id: "",
    title: "",
    desc: "",
    price: "",
    category: "",
    image: "",
  };
  const [inputForm, setInputForm] = useState(intialState);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = getStorageData();
    let updateData = data.map(prod => {
      if (prod.id == id) {
        return inputForm
      } else {
        return prod
      }
    })
    setStorageData(updateData);
    navigate("/");
  };

  useEffect(() => {
    let data = getStorageData();
    let singleRec = data.find(product => product.id == id)
    setInputForm(singleRec);
  }, [id]);
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Container style={{ maxWidth: "600px", width: "100%" }}>
          <h2 className="text-center mb-4 mt-5">Edit Product Page</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label >
                Title
              </Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={inputForm.title}
                onChange={handleChanged}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label >
                Description
              </Form.Label>
              <Form.Control
                type="text"
                name="desc"
                value={inputForm.desc}
                onChange={handleChanged}
              />
            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Label>
                Price
              </Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={inputForm.price}
                onChange={handleChanged}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Category
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="category"
                onChange={handleChanged}
              >
                <option>Select Category</option>
                <option value="Skincare" selected={inputForm.category == "Skincare"}>Skincare</option>
                <option value="Hair" selected={inputForm.category == "Hair"}>Hair</option>
                <option value="Fashion" selected={inputForm.category == "Fashion"}>Fashion</option>
                <option value="Make-Up" selected={inputForm.category == "Make-Up"}>Make-Up</option>
                <option value="Appliances" selected={inputForm.category == "Appliances"}>Appliances</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Image
              </Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={inputForm.image}
                onChange={handleChanged}
              />
            </Form.Group>

            <Button type="submit" className=" edit-btn d-block mx-auto mt-4 add-btn">
              Update Product
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default EditProduct;