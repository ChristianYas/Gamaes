import { useState } from "react";
import Swal from 'sweetalert2'
import "./ModalWindow.css";

const ModalWindow = ({ setModalWindow, searchTags }) => {
  const [seleccionados, setSeleccionados] = useState(0);
  const [flags, setFlags] = useState("");

  function Event(e) {
    if (e.target.nodeName === "LI") {
      setSeleccionados();
      e.target.classList.toggle("selected");

      if (e.target.className) {
        let account = seleccionados + 1;
        setSeleccionados(account);
      } else {
        let account = seleccionados - 1;
        setSeleccionados(account);
      }
    }
  }

  const handlerClick = () => {
    let geneross = [];
    let generos = document
      .getElementById("modal-window")
      .getElementsByTagName("li");
    for (let i = 0; i < generos.length; i++) {
      if (generos[i].className) {
        geneross.push(generos[i].innerHTML);
      }
    }

    let request_params = { geneross, flags };

    if(request_params['geneross'].length > 0){
      searchTags(request_params);
    }
    else{
      Swal.fire({
        title: 'No haz seleccionados generos',
        text: 'Antes de buscar, necesitas elegir almenos un genero',
        icon: 'warning',
        confirmButtonText: 'ok'
      })
    }
  };

  const handlerChange = (e) => {
    setFlags(e.target.value);
  };

  return (
    <div onClick={(e) => Event(e)} className="modal-window" id="modal-window">
      <ol>
        <li>mmorpg</li>
        <li>shooter</li>
        <li>strategy</li>
        <li>moba</li>
        <li>racing</li>
        <li>sports</li>
        <li>social</li>
        <li>sandbox</li>
        <li>open-world</li>
        <li>survival</li>
        <li>pvp</li>
        <li>pixel</li>
        <li>voxel</li>
        <li>zombie</li>
        <li>turn-based</li>
        <li>first-person</li>
        <li>third-person</li>
        <li>top-down</li>
        <li>tank</li>
        <li>space</li>
        <li>sailing</li>
        <li>side-scroller</li>
        <li>superhero</li>
        <li>permadeath</li>
        <li>card</li>
        <li>battle-royale</li>
        <li>mmo</li>
        <li>mmofps</li>
        <li>mmotps</li>
        <li>3d</li>
        <li>2d</li>
        <li>anime</li>
        <li>fantasy</li>
        <li>sci-fi</li>
        <li>fighting</li>
        <li>action-rpg</li>
        <li>action</li>
        <li>military</li>
        <li>material-arts</li>
        <li>flight</li>
        <li>low-spec</li>
        <li>tower-defense</li>
        <li>horror</li>
        <li>mmorts</li>
      </ol>
      <form onChange={(e) => handlerChange(e)}>
        <input type="radio" name="flags" value="release-data" />
        <label>release-data</label>
        <input type="radio" name="flags" value="popularity" />
        <label>popularity</label>
        <input type="radio" name="flags" value="relevance" />
        <label>relevance</label>
        <input type="radio" name="flags" value="alphabetical" />
        <label>alphabetical</label>
      </form>
      <p>Haz seleccionado {seleccionados} generos</p>
      <button onClick={handlerClick} type="button">
        Buscar
      </button>
      <p className="exit" onClick={() => setModalWindow(false)}>
        X
      </p>
    </div>
  );
};

export default ModalWindow;
