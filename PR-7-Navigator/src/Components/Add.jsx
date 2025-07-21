// import generateUniqueId from "generate-unique-id";
// import { useState } from "react";
// import { useNavigate } from "react-router";
// import { Button, Col, Container, Form, Row } from "react-bootstrap";
// import { getStorageData, setStorageData } from "../Services/StorageData";

// const AddProduct = () => {
//   const navigate = useNavigate();
//   const intialState = {
//     title: "",
//     desc: "",
//     price: "",
//     category: "",
//     image: "",
//   };
//   const [inputForm, setInputForm] = useState(intialState);

//   const handleChanged = (e) => {
//     const { name, value } = e.target;
//     setInputForm({
//       ...inputForm,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let id = generateUniqueId({
//       length: 6,
//       useLetters: false,
//     });
//     inputForm.id = id;
//     //   console.log("Submitted : => ", inputForm);
//     let data = getStorageData();
//     data.push(inputForm);
//     setStorageData(data);
//     navigate("/");
//   };
//   return (
//     <>
//       <Container className=" mt-5 d-flex justify-content-center">
//         <div  style={{ width: "100%", maxWidth: "600px" }}>
//         <h2 className="text-center mb-4">Add Product Page</h2>
//           <Form className="p-4"  onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '100%', marginLeft:'' }}>
//             <Form.Group as={Row} className="mb-3">
//               <Form.Label column sm="2">
//                 Title
//               </Form.Label>
//               <Col sm="6">
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Title"
//                   name="title"
//                   value={inputForm.title}
//                   onChange={handleChanged}
//                 />
//               </Col>
//             </Form.Group>
//             <Form.Group as={Row} className="mb-3">
//               <Form.Label column sm="2">
//                 Description
//               </Form.Label>
//               <Col sm="6">
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Description"
//                   name="desc"
//                   value={inputForm.desc}
//                   onChange={handleChanged}
//                 />
//               </Col>
//             </Form.Group>

//             <Form.Group as={Row} className="mb-3">
//               <Form.Label column sm="2">
//                 Price
//               </Form.Label>
//               <Col sm="6">
//                 <Form.Control
//                   type="number"
//                   placeholder="Enter Price"
//                   name="price"
//                   value={inputForm.price}
//                   onChange={handleChanged}
//                 />
//               </Col>
//             </Form.Group>

//             <Form.Group as={Row} className="mb-3">
//               <Form.Label column sm="2">
//                 Category
//               </Form.Label>
//               <Col sm="6">
//                 <Form.Select
//                   aria-label="Default select example"
//                   name="category"
//                   onChange={handleChanged}
//                 >
//                   <option>Select Category</option>
//                   <option value="Skincare">Skincare</option>
//                   <option value="Hair">Hair</option>
//                   <option value="Fashion">Fashion</option>
//                   <option value="Make-Up">Make-Up</option>
//                   <option value="Appliances">Appliances</option>
//                 </Form.Select>
//               </Col>
//             </Form.Group>

//             <Form.Group as={Row} className="mb-3">
//               <Form.Label column sm="2">
//                 Image
//               </Form.Label>
//               <Col sm="6">
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Image URL"
//                   name="image"
//                   value={inputForm.image}
//                   onChange={handleChanged}
//                 />
//               </Col>
//             </Form.Group>

//             <Button type="submit" style={{marginRight:'200px'}} className="add-btn">Add Product</Button>
//           </Form>
//           </div>
//       </Container>
//     </>
//   );
// };

// export default AddProduct;



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
  const [inputForm, setInputForm] = useState(initialState);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = generateUniqueId({
      length: 6,
      useLetters: false,
    });
    inputForm.id = id;
    let data = getStorageData();
    data.push(inputForm);
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
              placeholder="Enter Title"
              name="title"
              value={inputForm.title}
              onChange={handleChanged}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Description"
              name="desc"
              value={inputForm.desc}
              onChange={handleChanged}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Price"
              name="price"
              value={inputForm.price}
              onChange={handleChanged}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              name="category"
              value={inputForm.category}
              onChange={handleChanged}
            >
              <option value="">Select Category</option>
              <option value="Skincare">Skincare</option>
              <option value="Hair">Hair</option>
              <option value="Fashion">Fashion</option>
              <option value="Make-Up">Make-Up</option>
              <option value="Appliances">Appliances</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Image URL"
              name="image"
              value={inputForm.image}
              onChange={handleChanged}
            />
          </Form.Group>

          <Button type="submit" className="d-block mx-auto mt-4 add-btn">
            Add Product
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddProduct;
