import { useEffect, useState } from "react";
import Request from "./Helpers/Request";
import ContainerCards from "./components/ContainerCards";
import Header from "./components/Header";
import ModalWindow from "./components/ModalWindow";
import EspecificCard from "./components/EspecificCard";
import "./App.css";
import SearchRequest from "./components/SearchRequest";
import Nueva from "./components/Nueva";
import Swal from "sweetalert2";

function App() {
  const [allgames, setAllGames] = useState({});
  const [allGamesServer, setAllGamesServer] = useState({});
  const [modalwindow, setModalWindow] = useState(false);
  const [especificGame, setEspecificGame] = useState(false);
  const [id, setId] = useState(null);
  const [informationSpecificGame, setInformationSpecificGame] = useState({});
  const [searchEspecificGame, setSearchEspecificGame] = useState({});
  const [searchVisibility, setSearchVisibility] = useState(false);
  const [search, setSearch] = useState("");
  const [nueva, setNueva] = useState(false);
  const [generos, setGeneros] = useState("");

  useEffect(()=>{
      console.log(window.screen.width);
  },[])

  const searchTags = async (request_params) => {
    let data = await Request("multipleTags", request_params);
    setModalWindow(false);

    let tags = "";

    request_params["geneross"].map((el) => {
      tags += `${el} `;
    });

    if (Array.isArray(data)) {
      setAllGames(data);
      Swal.fire({
        title: "Todo bien!",
        text: `Hemos encontrado ${data.length} juegos de los generos ${tags}`,
        icon: "success",
        confirmButtonColor: "#20E2FB",
        confirmButtonText: "Gracias!",
      });
    } else if(Array.isArray(data) === false) {
      Swal.fire({
        title: "Lo sentimos",
        text: `No hemos encontrado juegos con esos generos`,
        confirmButtonText: "Continuar",
        icon: "error",
      });
    }
  };

  useEffect(() => {
    Request().then((data) => {
      setAllGames(data);
      setAllGamesServer(data);
    });
  }, []);

  useEffect(() => {
    const EspecificGame = async () => {
      let data;
      if (id) {
        data = await Request("especificgame", { id });
        setInformationSpecificGame(data);
      }
    };

    EspecificGame();
  }, [especificGame]);

  useEffect(() => {
    if (search === "Mi pequeña") {
      setNueva(true);
    }

    if (allgames.length > 0) {

      let validation = allGamesServer.find(game => game['title'].toLowerCase().includes(search.toLowerCase()))

      if(validation){
        let id = validation['id']
        Request("especificgame", { id }).then(data =>{
          setSearchEspecificGame(data)
          setSearchVisibility(true)
        })
      }
      else{
        Swal.fire({
          title: 'Lo sentimos',
          text: `No hemos encontrado el juego ${search}`,
          icon: 'info'
        })
      }
    }
  }, [search]);

  return (
    <div className="App">
      <Header
        setModalWindow={setModalWindow}
        setSearch={setSearch}
        generos={generos}
      />
      {allgames.length > 0 ? (
        <ContainerCards
          setId={setId}
          setEspecificGame={setEspecificGame}
          el={allgames}
        />
      ) : null}
      {modalwindow ? (
        <ModalWindow setModalWindow={setModalWindow} searchTags={searchTags} />
      ) : null}
      {especificGame ? (
        <EspecificCard
          el={informationSpecificGame}
          setEspecificGame={setEspecificGame}
          target={"_blank"}
        />
      ) : null}
      {searchVisibility ? (
        <SearchRequest
          el={searchEspecificGame}
          setSearchVisibility={setSearchVisibility}
        />
      ) : null}

      {nueva ? <Nueva setNueva={setNueva} /> : null}
    </div>
  );
}

export default App;
