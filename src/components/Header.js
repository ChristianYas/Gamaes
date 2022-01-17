import lupa from "./lupa.png";
import "./Header.css";

const Header = ({ setModalWindow, setSearch}) => {

  return (
    <div className="header">
      <img src={lupa} alt="lupa" />
      <input
        type="text"
        placeholder="Buscador..."
        name="busqueda"
        onKeyPress={(e) =>
          e.key === "Enter" ? setSearch(e.target.value) : null
        }
      />
      <p className='options' onClick={() => setModalWindow(true)}>Options</p>
    </div>
  );
};

export default Header;
