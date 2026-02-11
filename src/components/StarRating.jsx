import { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{
            cursor: "pointer",
            fontSize: "24px",
            color: star <= rating ? "gold" : "gray",
          }}
        >
          ⭐
        </span>
      ))}
      <p>Rating: {rating}/5</p>
    </div>
  );
}

export default StarRating;
