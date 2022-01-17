import windows from "./ventanas.png";
import browser from './browser.png';
import './Card.css'

const Card = ({el,setEspecificGame,setId}) => {
    let {id,thumbnail,short_description,genre,platform,developer} = el

    function llenar(){
      setEspecificGame(true)
      setId(id)
    }

  return (
    <div className="container-card" id={id} onClick={()=> llenar()}>
      <img
        className="img-game"
        src={thumbnail}
        alt="img-game"
      />  
      <p>{short_description}</p>
      <ul>
        <li>{developer}</li>
        <li>{genre}</li>
        <li>
          {
            platform === 'PC (Windows)' ? <img src={windows} alt="windows"/> : <img src={browser} alt='browser'/>
          }
        </li>
      </ul>
    </div>
  );
};

export default Card;
