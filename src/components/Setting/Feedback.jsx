import styled from "styled-components";
import TitleComponent from "../TitleComponent";
import { ContentWrapper, SectionWrapper } from "../../Style/Wrapper";
import { BACKEND_URL } from "../../../utils/constant";
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const RatingDisplay = styled.div`
  font-size: 32px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  font-family: "Arial", sans-serif;
`;

const SubmitButton = styled.button`
  background-color: #ecf229;
  color: #333;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
`;

const StarRating = ({ rating, setRating }) => {
  const handleStarClick = (index) => {
    // If the clicked star's index is the same as the current rating, set rating to 0 (unclick the star)
    // Otherwise, set the rating to the clicked star's index
    if (rating === index) {
      setRating(0);
    } else {
      setRating(index);
    }
  };
  return (
    <RatingDisplay>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? "on" : "off"}
            onClick={() => handleStarClick(index)} // Use the new click handler
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            {index <= rating ? "★" : "☆"}
          </button>
        );
      })}
    </RatingDisplay>
  );
};

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post(
        `${BACKEND_URL}/api/feedback`,
        {
          rating, // Assuming 'rating' variable exists in your component's state
          comment, // Assuming 'comment' variable exists in your component's state
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Use SweetAlert2 for a success message
      Swal.fire({
        title: "Success!",
        text: "Feedback submitted successfully",
        icon: "success",
        confirmButtonText: "OK",
      });

      // Reset form or navigate to another page as needed
      setRating(0);
      setComment("");
    } catch (error) {
      console.error("Error submitting feedback:", error.response);
      // Use SweetAlert2 for an error message, including server-provided error details if available
      Swal.fire({
        title: "Error!",
        text: `Error submitting feedback: ${
          error.response?.data || "Unknown error"
        }`,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  return (
    <div>
      <TitleComponent title="Feedback" />
      <ContentWrapper>
        <div>
          <h3 className="xl:text-3xl">How was your experience?</h3>
          <StarRating rating={rating} setRating={setRating} />
          <p>
            Share your thoughts on our app! Your insights aid our growth and
            assist fellow users in making informed choices.
          </p>
          <TextArea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Type your feedback here..."
          />
          <SubmitButton onClick={handleSubmit}>SUBMIT</SubmitButton>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Feedback;
