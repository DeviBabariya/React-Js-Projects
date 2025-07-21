import { useEffect, useState } from "react";
import { getStorageData, setStorageData } from "../Services/StorageData";
import { Badge, Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const Home = () => {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  }

  const handleDelete = (id) => {
    let data = getStorageData();
    let updateData = data.filter(product => product.id != id)
    // console.log(updateData);
    setStorageData(updateData);
    setProductData(updateData);
  }

  useEffect(() => {
    let data = getStorageData();
    setProductData(data);
  }, []);
  return (
    <>
      <Container>
        <h1 style={{marginTop:"90px ", marginBottom:"30px"}} >Home</h1>
        <div className="d-flex flex-wrap justify-content-center ">
          {productData.map((product) => (
            <Card style={{ width: "23rem", margin: "10px", borderLeft: "7px solid #E80071"}} key={product.id}>
              <Card.Img variant="top" src={product.image}  alt="product-img" height="300px" className="object-fit-contain"/>
              <Card.Body>
                <Card.Title>
                  {product.title} - {product.id}
                </Card.Title>
                <Card.Text>{product.desc}</Card.Text>
                <Badge>{product.category}</Badge>
                <br />
                <br />
                <h5 className="mb-4">Price : {product.price} rs</h5>
                <Button onClick={() => handleEdit(product.id)} className="edit-btn">
                  <FaEdit className="mb-1 fs-5"/> Edit
                </Button>{" "}
                &nbsp;&nbsp;
                <Button onClick={() => handleDelete(product.id)} className="del-btn">
                 <RiDeleteBin5Line className="mb-1 fs-5"/>  Delete
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Home;