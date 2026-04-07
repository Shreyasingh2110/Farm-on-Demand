import React, { useState } from "react";

const ReviewPage = () => {
  const [review, setReview] = useState("");

  const submitReview = () => {
    alert("Review Submitted: " + review);
  };

  return (
    <div>
      <h2>Give Review</h2>
      <textarea onChange={(e) => setReview(e.target.value)} />
      <button onClick={submitReview}>Submit</button>
    </div>
  );
};

export default ReviewPage;