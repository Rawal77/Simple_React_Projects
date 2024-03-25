import { Link } from "react-router-dom";

export const CmsMenu = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/generaterandomcolor">Random Color</Link>
    </div>
  );
};
