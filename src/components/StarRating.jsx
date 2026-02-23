function StarRatings({ rating }) {
  const totalStars = 5;

  return (
    <div>
      {Array.from({ length: totalStars }, (_, index) => (
        <span key={index}>{index < rating ? "⭐" : "☆"}</span>
      ))}
    </div>
  );
}

export default StarRatings;
