import styles from "./arrows.css";

export function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <div className={className} style={{ ...styles }} onClick={onClick} />;
}

export function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={className} style={{ ...styles }} onClick={onClick} />;
}
