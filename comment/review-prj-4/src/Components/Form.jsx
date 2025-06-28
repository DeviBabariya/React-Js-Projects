import { useState } from "react";
import "./ReviewForm.css";

const ReviewForm = () => {
  const initialState = {
    username: "",
    email: "",
    rating: "",
    comment: ""
  };

  const [formData, setFormData] = useState(initialState);
  const [errorList, setErrorList] = useState({});
  const [reviews, setReviews] = useState([]);

  const ratingEmojis = ["😑", "😣", "😊", "🥰", "🤩"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRatingClick = (value) => {
    setFormData({
      ...formData,
      rating: value
    });
  };

  const formValidation = () => {
    const errors = {};
    const { username, email, rating, comment } = formData;

    if (username === "") {
      errors.usernameErr = "Please enter your username!";
    } else if (username.length < 3) {
      errors.usernameErr = "Username must be at least 3 characters.";
    }

    if (email === "") {
      errors.emailErr = "Please enter your email!";
    } 

    if (rating === "") {
      errors.ratingErr = "Please select a rating!";
    }

    if (comment === "") {
      errors.commentErr = "Please enter a comment!";
    } else if (comment.length < 5) {
      errors.commentErr = "Comment must be at least 5 characters.";
    }

    setErrorList(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation()) {
      setReviews([...reviews, formData]);
      setFormData(initialState);
      setErrorList({});
    }
  };


  return (
    <div className="review-container">
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>

        <label>Username:</label>
        <input
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          style={{ borderColor: errorList.usernameErr ? "red" : " " }}
        />
        {errorList.usernameErr ? <i>{errorList.usernameErr}</i>:""}
        <br /><br />

        <label>Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ borderColor: errorList.emailErr ? "red" : " " }}
        />
        {errorList.emailErr ? <i>{errorList.emailErr}</i>:""}
        <br /><br />

        <label>Rating:</label>
        <ul className="rating-list">
          {ratingEmojis.map((emoji, index) => (
            <li key={index}>
              <button
                type="button"
                className={formData.rating === (index + 1).toString() ? "selected" : ""}
                onClick={() => handleRatingClick((index + 1).toString())}
              >
                {emoji}
              </button>
            </li>
          ))}
        </ul>

        {errorList.ratingErr ? <i>{errorList.ratingErr}</i>:""}
        <br /><br />

        <label>Comment:</label>
        <textarea
          id="comment"
          name="comment"
          rows="3"
          cols="30"
          value={formData.comment}
          onChange={handleChange}
          style={{ borderColor: errorList.commentErr ? "red" : "" }}
        ></textarea>
        {errorList.commentErr ? <i>{errorList.commentErr}</i>:""}
        <br /><br />

        <button type="submit">Submit your feedback</button>
      </form>

      <hr />

      <h2>Submitted Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.username}</h3>
            <p>Email: {review.email}</p>
            <p>Rating: {ratingEmojis[parseInt(review.rating) - 1]}</p>
            <p>{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewForm;
