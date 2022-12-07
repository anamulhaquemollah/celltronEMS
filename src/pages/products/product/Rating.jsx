import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating }) => {
  return (
    <span style={{ display: "flex", color: "#F1C40F" }}>
      {[...Array(5)].map((_, i) => {
        return rating > i ? (
          <AiFillStar
            key={i}
            style={{
              border: "2px solid #F1C40F",
              borderRadius: "100%",
              marginLeft: "2px",
            }}
          />
        ) : (
          <AiOutlineStar
            key={i}
            style={{
              border: "2px solid #F1C40F",
              borderRadius: "100%",
              marginLeft: "2px",
            }}
          />
        );
      })}
    </span>
  );
};

export default Rating;
