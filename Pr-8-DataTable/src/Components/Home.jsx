import { useEffect, useState } from "react";
import { getStorageData, setStorageData } from "../Services/StorageData";
import { Badge, Button, Card, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaSortAmountDown } from "react-icons/fa";
import ReactPaginate from "react-paginate";



const ITEMS_PER_PAGE = 5;

const Home = () => {
  const [productData, setProductData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortData, setSortData] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const data = getStorageData();
    setProductData(data);
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };

  const handleDelete = (id) => {
    let data = getStorageData();
    let updatedData = data.filter((product) => product.id !== id);
    setStorageData(updatedData);
    setProductData(updatedData);
  };

  const handleSearch = () => {
    const data = getStorageData();
    const searchTerm = search.toLowerCase().trim();
    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm) ||
        item.price.toString().includes(searchTerm)
    );
    setProductData(filtered);
    setCurrentPage(0);
  };

  const handleClear = () => {
    const data = getStorageData();
    setProductData(data);
    setSearch("");
    setSortData("");
    setCurrentPage(0);
  };

  const handleSort = () => {
    if (!sortData) return;
    const data = [...getStorageData()];
    const [field, order] = sortData.split(",");

    let sorted = data.sort((a, b) => {
      if (field === "price") {
        return order === "asc" ? a.price - b.price : b.price - a.price;
      } else {
        return order === "asc"
          ? a[field].localeCompare(b[field])
          : b[field].localeCompare(a[field]);
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
      <Container>
        <h1 style={{ marginTop: "90px", marginBottom: "30px" }}>Products</h1>

        {/* Search & Sort  */}

        <div className="d-flex flex-wrap justify-content-center mb-4 gap-3">
          <Form.Control
            type="text"
            placeholder="Search by title, price or category"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ maxWidth: "300px" }}
          />
          <Button onClick={handleSearch} className="search-btn">
            <FaSearch className="mb-1" />
          </Button>
          <Button onClick={handleClear} variant="secondary" className="me-4">
            Clear
          </Button>
          <Form.Select
            style={{ maxWidth: "250px" }}
            value={sortData}
            onChange={(e) => setSortData(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="title,asc">Name - A to Z</option>
            <option value="title,desc">Name - Z to A</option>
            <option value="price,asc">Price - Low to High</option>
            <option value="price,desc">Price - High to Low</option>
            <option value="category,asc">Category - A to Z</option>
            <option value="category,desc">Category - Z to A</option>
          </Form.Select>
          <Button onClick={handleSort} className="sort-btn">
            <FaSortAmountDown className="mb-1"/>
          </Button>
        </div>

        {/* Product Cards */}
        <div className="d-flex flex-wrap justify-content-center">
          {currentPageData.map((product) => (
            <Card
              key={product.id}
              style={{ width: "23rem", margin: "10px" }}
              className="mt-3 mb-4 mx-4 shadow"
            >
              <Card.Img
                variant="top"
                src={product.image}
                alt="product-img"
                height="300px"
                className="object-fit-contain"
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.desc}</Card.Text>
                <Badge bg="info" className="mb-2">
                  {product.category}
                </Badge>
                <h6 className="mb-4">Price: ₹{product.price}</h6>
                <Button
                  onClick={() => handleEdit(product.id)}
                  className="edit-btn me-2"
                >
                  <FaEdit className="mb-1 fs-5" /> Edit
                </Button>
                <Button
                  onClick={() => handleDelete(product.id)}
                  className="del-btn"
                  variant="danger"
                >
                  <RiDeleteBin5Line className="mb-1 fs-5" /> Delete
                </Button>
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
  );
};

export default Home;

