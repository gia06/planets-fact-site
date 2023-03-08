import { useLocation } from "react-router-dom";

function Planet() {
  const { pathname } = useLocation();
  const planet = pathname.slice(1);
  console.log(planet);

  return (
    <div
      style={{
        color: "red",
        fontSize: "11px",
      }}
    >
      {planet}
    </div>
  );
}

export default Planet;
