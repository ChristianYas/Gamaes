import Card from "./Card";
import "./ContainerCards.css";

const ContainerCards = ({ el, setEspecificGame, setId }) => {

  return (
    <div className="Container-Card">
     {
       el.map(el => <Card key={el['id']} setId={setId} setEspecificGame={setEspecificGame} el={el} />)
     }
    </div>
  );
};

export default ContainerCards;
