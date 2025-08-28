import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteStudentAsync,
  getAllStudentAsync,
} from "../Services/Actions/studentAction";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import Banner from "./Banner.jsx";
import { TbEdit } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";
import ReactPaginate from "react-paginate";
import { IoSearch, IoCloseCircle } from "react-icons/io5";
import { FaSortAmountDown } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 const { user } = useSelector((state) => state.auth);

  const { students = [], isError, isSearchActive } = useSelector(
    (state) => state.studentReducer || { students: [], isError: "" }
  );

  const [search, setSearch] = useState("");
  const [sortData, setSortData] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    if (!isSearchActive && (!students || students.length === 0)) {
      dispatch(getAllStudentAsync());
    }
  }, [dispatch, isSearchActive, students?.length]);

  // filter + sort
  const filteredSorted = useMemo(() => {
    let list = Array.isArray(students) ? [...students] : [];

    if (search?.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (s) =>
          (s.fullName || "").toLowerCase().includes(q) ||
          (s.standard || "").toLowerCase().includes(q) ||
          (s.rollNo || "").toLowerCase().includes(q) ||
          (s.email || "").toLowerCase().includes(q) ||
          (s.contact || "").toLowerCase().includes(q)
      );
    }

    if (sortData) {
      const [field, dir] = sortData.split(",");
      list.sort((a, b) => {
        const A = a?.[field];
        const B = b?.[field];
        const numA = Number(A);
        const numB = Number(B);

        if (!Number.isNaN(numA) && !Number.isNaN(numB)) {
          return dir === "asc" ? numA - numB : numB - numA;
        }
        return dir === "asc"
          ? String(A || "").localeCompare(String(B || ""))
          : String(B || "").localeCompare(String(A || ""));
      });
    }

    return list;
  }, [students, search, sortData]);

    useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);

  // pagination
  const pageCount = Math.ceil(filteredSorted.length / itemsPerPage) || 1;
  const offset = currentPage * itemsPerPage;
  const currentItems = filteredSorted.slice(offset, offset + itemsPerPage);

  const handlePageClick = (event) => setCurrentPage(event.selected);
  const handleClear = () => {
    setSearch("");
    setCurrentPage(0);
  };

  const handleEdit = (id) => navigate(`/edit/${id}`);
  const handleDelete = (id) => dispatch(deleteStudentAsync(id));

  return (
    <>
      <Banner />
      {isError && <div className="text-danger text-center mt-5">{isError}</div>}

      {/* search + sort bar */}
      <div className="d-flex flex-wrap gap-2 my-3 px-3 align-items-center justify-content-between mt-4">
        <Form
          className="flex-grow-1 me-1 ms-4"
          onSubmit={(e) => {
            e.preventDefault();
            setCurrentPage(0);
          }}
          style={{ maxWidth: "600px" }}
        >
          <InputGroup style={{ background: "#f8f8f8" }}>
            <InputGroup.Text
              className="bg-transparent border-0"
              onClick={() => setCurrentPage(0)}
              style={{ cursor: "pointer" }}
            >
              <IoSearch className="fs-5 search" />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search by name, roll no, standard, email or contact"
              className="border-0 px-3 py-2 text-black"
              style={{ background: "#f8f8f8" }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <InputGroup.Text
                className="bg-transparent border-0"
                onClick={handleClear}
                style={{ cursor: "pointer" }}
              >
                <IoCloseCircle className="fs-5 text-secondary clear" />
              </InputGroup.Text>
            )}
          </InputGroup>
        </Form>

        <div className="d-flex align-items-center gap-2 ms-4">
          <select
            onChange={(e) => setSortData(e.target.value)}
            value={sortData}
            className="form-select"
            style={{ maxWidth: "220px" }}
          >
            <option value="">Select Sorting</option>
            <option value="fullName,asc">Name - A to Z</option>
            <option value="fullName,desc">Name - Z to A</option>
            <option value="rollNo,asc">Roll No - Low to High</option>
            <option value="rollNo,desc">Roll No - High to Low</option>
            <option value="age,asc">Age - Low to High</option>
            <option value="age,desc">Age - High to Low</option>
            <option value="standard,asc">Standard - A to Z</option>
            <option value="standard,desc">Standard - Z to A</option>
          </select>
          <Button className="sort-btn" onClick={() => setCurrentPage(0)}>
            <FaSortAmountDown />
          </Button>
        </div>
      </div>

      {/* student cards */}
      <div className="row g-3 mt-3 w-100 mb-3 px-3">
        {currentItems.length > 0 ? (
          currentItems.map((st) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={st.id}>
              <Card
                style={{
                  borderRadius: "10px",
                  padding: "12px",
                  border: "1px solid #e0e0e0",
                  minHeight: "420px",
                  boxShadow: "#0000000a 2px 2px 8px ",
                }}
              >
                <Card.Img
                  variant="top"
                  src={st.image || "/no-image.jpg"}
                  style={{
                    height: "260px",
                    objectFit: "cover",
                    objectPosition: "top",
                    marginBottom: "10px",
                    borderRadius: "6px",
                  }}
                  alt={st.fullName}
                />

                <Card.Body className="p-0">
                  <Card.Title as="h6" className="mb-3 fw-bold fs-5">
                    {st.fullName}
                  </Card.Title>
                  <div style={{ fontSize: "13px", lineHeight: "1.4" }}>
                    <div>
                      <ul className="list-unstyled d-flex gap-5 flex-wrap">
                        <li><strong>Roll No:</strong> {st.rollNo}</li>
                        <li><strong>Standard:</strong> {st.standard}</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="list-unstyled d-flex gap-5 flex-wrap">
                        <li><strong>Class No:</strong> {st.classNo}</li>
                        <li><strong>DOB:</strong> {st.dob}</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="list-unstyled d-flex gap-5 flex-wrap">
                        <li><strong>Age:</strong> {st.age}</li>
                        <li><strong>Gender:</strong> {st.gender}</li>
                      </ul>
                    </div>
                    <div>
                      <p><strong>Email:</strong> {st.email}</p>
                    </div>
                    <div>
                      <p><strong>Contact:</strong> {st.contact}</p>
                    </div>
                    <div>
                      <p><strong>Admit Date:</strong> {st.admitDate}</p>
                    </div>
                    <div >
                      <p><strong>Address:</strong> {st.address}</p>
                    </div>
                  </div>

                  <div className="d-flex mt-2 gap-2">

                    <Button
                      className="fs-6 fw-bold"
                      variant="outline-success"
                      onClick={() => handleEdit(st.id)}
                    >
                      <TbEdit /> Edit
                    </Button>
                    <Button
                      className="fs-6 fw-bold"
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleDelete(st.id)}
                    >
                      <AiOutlineDelete className="fs-6" /> Delete
                    </Button>


                    <Link to={`/students/${st.id}`} className="btn btn-outline-primary fs-6 fw-bold btn-sm">
                      <GrView /> View
                    </Link>

                  </div>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <div className="text-center w-100 mt-5">
            <p>No students found.</p>
          </div>
        )}
      </div>

      {/* pagination */}
      <div className="d-flex justify-content-center mt-4">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< Prev"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </>
  );
};

export default Home;

