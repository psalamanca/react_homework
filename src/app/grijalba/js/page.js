import Button from "../components/Button";
import "../css/StylesButton.css";

function AppGrijalba() {
  return (
    <div className="container1">
      <h1>Bienvenido a mi App </h1>
      <Button />
      <a href="../../../">
        <button className="home">Volver a Home</button>
      </a>
    </div>
  );
}

export default AppGrijalba;
