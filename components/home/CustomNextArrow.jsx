export const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#b28ee8", // Cambiá este color
        borderRadius: "100%",
      }}
      onClick={onClick}
    />
  );
};
