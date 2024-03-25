import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>SimpleReactProjects</h1>
      <div className="links">
        <Link to="/counter">Counter</Link>
        <Link to="/generaterandomcolor">Generate Random Color</Link>
        <Link to="/scrolltobottom">Scroll to Bottom Button</Link>
        <Link to="/scrolltotop">Scroll to Top Button</Link>
        <Link to="/datenav">Date Navigation</Link>
        <Link to="/pop">Popup</Link>
        <Link to="/tic">Tic Tac Toe</Link>
        <Link to="/tabs">Tabs</Link>
        <Link to="/simpletodo">Simple To Do</Link>
        <Link to="/generaterq">Generate Random Quote</Link>
        <Link to="/multistep">Multi Step Progress</Link>
      </div>
    </div>
  );
}
