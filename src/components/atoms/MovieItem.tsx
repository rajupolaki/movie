import { CSSProperties, FC } from "react";

const movieItemStyle = (selected?: boolean): CSSProperties => ({
  backgroundColor: selected ? "#a9b3c4" : "#ececec",
  fontWeight: selected ? "bold" : "normal",
  cursor: "pointer",
  padding: "0.2em 0.75em",
  color: "#1a1a1a",
});

export type MovieItemProps = {
  id: string;
  title: string;
  selected?: boolean;
};

const MovieItem: FC<MovieItemProps> = ({ id, title, selected }) => {
  return <div style={movieItemStyle(selected)}>{title}</div>;
};

export default MovieItem;
