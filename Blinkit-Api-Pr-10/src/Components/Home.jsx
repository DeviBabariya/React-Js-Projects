import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductAsync, getAllProductAsync } from "../Services/Actions/productAction";
import { Button, Card, Container, Spinner, Form , Row , Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import StaticElem from './StaticElements'
import Categories from "./Categories";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import time from "../assets/time.avif"
import { FaSearch, FaSortAmountDown , FaEye } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 12;
const Home = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.productReducer);
  const navigate = useNavigate();

  const [productData, setProductData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortData, setSortData] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(getAllProductAsync());
  }, [dispatch]);

  
  useEffect(() => {
    setProductData(products);
  }, [products]);

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteProductAsync(id));
    setProductData((prev) => prev.filter((prod) => prod.id !== id));
  };

  const handleSearch = () => {
    const searchTerm = search.toLowerCase().trim();
    const filtered = products.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm) ||
        (item.category && item.category.toLowerCase().includes(searchTerm)) ||
        item.price.toString().includes(searchTerm)
    );
    setProductData(filtered);
    setCurrentPage(0);
  };

  const handleClear = () => {
    setProductData(products);
    setSearch("");
    setSortData("");
    setCurrentPage(0);
  };

  const handleSort = () => {
    if (!sortData) return;
    const [field, order] = sortData.split(",");
    let sorted = [...productData].sort((a, b) => {
      if (field === "price") {
        return order === "asc" ? a.price - b.price : b.price - a.price;
      } else {
        return order === "asc"
          ? (a[field] || "").localeCompare(b[field] || "")
          : (b[field] || "").localeCompare(a[field] || "");
      }
    });
    setProductData(sorted);
    setCurrentPage(0);
  };

  // Pagination
  const offset = currentPage * ITEMS_PER_PAGE;
  const currentPageData = productData.slice(offset, offset + ITEMS_PER_PAGE);
  const pageCount = Math.ceil(productData.length / ITEMS_PER_PAGE);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      {isLoading ? (
        <div className="spinner">
          <Spinner animation="border" variant="success"></Spinner>
        </div>
      ) : (
        <>
          <StaticElem />
          <Categories />
          <Container>
            
            <div className="d-flex flex-wrap  mb-4 gap-3">
            
                <Form.Control
                  type="text"
                  placeholder="Search by title, price or category"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ maxWidth: "700px" }}
                />
                <Button onClick={handleSearch} className="search-btn">
                  <FaSearch className="mb-1" />
                </Button>
                <Button onClick={handleClear} variant="secondary" className="me-4 me-5">
                 <MdOutlineClear className="fs-4 fw-bold" />
                </Button>
              
              <Form.Select
                style={{ maxWidth: "250px" }}
                value={sortData}
                onChange={(e) => setSortData(e.target.value)}
                className="ms-5"
              >
                <option value="">Sort by</option>
                <option value="title,asc">Name - A to Z</option>
                <option value="title,desc">Name - Z to A</option>
                <option value="price,asc">Price - Low to High</option>
                <option value="price,desc">Price - High to Low</option>
              </Form.Select>
              <Button onClick={handleSort} className="sort-btn">
                <FaSortAmountDown className="mb-1" />
              </Button>
            
            
            </div>

            <div className="d-flex flex-wrap mb-3 ">
              {currentPageData.map((prod) => (
                <Card key={prod.id} style={{ borderRadius: '10px', padding: '16px', border: '1px solid #e0e0e0', width: '200px', height: '340px', boxShadow: ' #0000000a 2px 2px 8px ' }} className="mt-4 me-3 pb-3">
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
                    <Card.Title as="h6" className="mb-2 fw-semibold" style={{ fontSize: '13px', height: '36px' }}>{prod.title}</Card.Title>
                    <small style={{ fontSize: '12px' }}>{prod.amount}</small>
                     <div className="fw-bold mt-2 me-5" style={{ fontSize: '12px' }}>₹{prod.price}</div>
                    <div className="btn d-flex p-0 border-0 mt-2">
                     
                      <Button variant="outline-success" className="mt-2 ms-4 me-2 px-2 py-1" onClick={() => handleEdit(prod.id)}><FaRegEdit /></Button>
                      <Button variant="outline-success" className="mt-2 px-2 py-1" onClick={() => handleDelete(prod.id)}><RiDeleteBin6Line /></Button>
                      <Link to={`/product/${prod.id}`} className="mt-2 ms-2 px-2 py-1 view-btn"><FaEye /></Link>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="d-flex justify-content-center mt-4">
              <ReactPaginate
                previousLabel={"← Prev"}
                nextLabel={"Next →"}
                pageCount={pageCount}
                onPageChange={handlePageChange}
                containerClassName={"pagination"}
                activeClassName={"active"}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                breakLabel="..."
              />
            </div>
          </Container>
        </>
      )}
    </>
  );
};

export default Home;
