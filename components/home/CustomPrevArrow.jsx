export const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#b28ee8", // Cambiá este color
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};
