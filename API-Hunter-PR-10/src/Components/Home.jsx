import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductAsync, getAllProductAsync } from "../Services/Actions/productAction";
import { Button, Card, Container, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router";
import StaticElem from './StaticElements'
import Categories from "./Categories";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import time from "../assets/time.avif"

const Home = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.productReducer);
  const navigate = useNavigate();
  
  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  }
  
  const handleDelete = (id) => {
    dispatch(deleteProductAsync(id));
  }

  useEffect(() => {
    dispatch(getAllProductAsync());
  }, [dispatch]);

  return (
    <>
      {isLoading ?
        <div className="spinner">
          <Spinner animation="border" variant="success"></Spinner>
        </div>
        :
        <>
          <StaticElem />
          <Categories />
          <Container>
            <div className="d-flex flex-wrap mb-3 ">
              {products.map((prod) => (
                <Card key={prod.id} style={{ borderRadius: '10px', padding: '16px', border: '1px solid #e0e0e0', width: '200px', height: '310px', boxShadow: ' #0000000a 2px 2px 8px ' }} className="mt-4 me-3 ">
                  <Card.Img
                    variant="top"
                    src={prod.image}
                    style={{ height: '120px', objectFit: 'contain', marginBottom: '10px' }}
                    alt="img"
                  />

                  <div className="text-muted d-flex mb-2 fw-bold px-1 rounded-2" style={{ fontSize: '11px', backgroundColor: '#d1d1d1', width: '57px' }}>
                    <img src={time} alt="time" className="me-1 my-1" style={{ fontSize: '11px', width: '11px', height: '11px' }} /> <span className="pt-1" style={{ fontSize: '9px' }}>11 mins</span>
                  </div>

                  <Card.Body className="p-0">
                    <Card.Title as="h6" className="mb-3 fw-semibold" style={{ fontSize: '13px', height: '36px' }}>{prod.title}</Card.Title>
                    <small style={{ fontSize: '12px' }}>{prod.desc}</small>
                    <div className="btn d-flex p-0 border-0">
                      <div className="fw-bold mt-3 me-5" style={{ fontSize: '12px' }}>₹{prod.price}</div>
                      <Button variant="outline-success" className="mt-2 ms-3 me-2 px-2 py-1" onClick={() => handleEdit(prod.id)}><FaRegEdit /></Button>
                      <Button variant="outline-success" className="mt-2 px-2 py-1" onClick={() => handleDelete(prod.id)}><RiDeleteBin6Line /></Button>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Container>

        </>}
    </>
  );
};

export default Home;
