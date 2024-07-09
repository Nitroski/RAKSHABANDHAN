import React, { useState } from "react";
import "./ReviewTab.css";

function ReviewTab() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  const handleReviewSubmit = () => {
    setReviews([...reviews, newReview]);
    setNewReview("");
  };

  return (
    <div className="review-tab">
      <h2>MESSAGE ME 👀</h2>
      <div className="review-form">
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review here..."
        ></textarea>
        <button onClick={handleReviewSubmit}>SEND!</button>
      </div>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            {review}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewTab;
