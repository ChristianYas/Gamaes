import "./EspecificCard.css";

const EspecificCard = ({ setEspecificGame, el, target }) => {
  let  titlee,des, oss, processorr, memoryy, graphicss, storagee, img, url;

  if (typeof el["title"] === "string") {
    let {title} = el
    titlee = title

    let { description } = el;
    des = description;

    if (des.length > 1000) {
      let divison = des.split(",", 6);
      let newWord;

      divison.forEach((el) => {
        newWord += `${el}`;
      });

      newWord = newWord.replace("undefined", "");
      des = newWord;
    }

    let { game_url } = el;
    url = game_url;

    if (el["minimum_system_requirements"]) {
      let { os, processor, memory, graphics, storage } =
        el["minimum_system_requirements"];
      oss = os;
      processorr = processor;
      memoryy = memory;
      graphicss = graphics;
      storagee = storage;
    }

    let image = el["screenshots"];
    if (image.length < 1) {
      image = el["thumbnail"];
      console.log(image);
    } else {
      img = image[2]["image"];
    }
  }

  const requerimientos = () => {
    return (
      <>
        <li>Os: {oss}</li>
        <li>Processor: {processorr}</li>
        <li>Memory: {memoryy}</li>
        <li>Graphics: {graphicss} </li>
        <li>Storage: {storagee}</li>
      </>
    );
  };

  return (
    <div className="especific-card">
      <div className="container-large-card">
        <div className="container-img">
          <h2>{titlee}</h2>
          <img src={img} alt={""} />
          <a href={url} target={target}>
            Dowload
          </a>
        </div>
        <div className="about">
          <h3>About Game</h3>
          <p>{des}</p>

          <h3>Requirements</h3>
          <ol>
            {oss ? (
              requerimientos()
            ) : (
              <p>
                Not need any requirement cause is a browser game
              </p>
            )}
          </ol>
        </div>
      </div>
      <p className="exit" onClick={() => setEspecificGame(false)}>
        X
      </p>
    </div>
  );
};

export default EspecificCard;
