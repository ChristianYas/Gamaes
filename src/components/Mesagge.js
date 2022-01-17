import './Mesagge.css'

const Mesagge = ({setUsuarioMsg}) =>{
    return(
      <div className="container-msg">
           <div className="Msg">
            <p>
                Para poder avanzar en los juegos orpima la tecla 'e' de su teclado
                y para retroceder oprima la tecla 'q'
            </p>
            <p onClick={setUsuarioMsg(false)} className='exit'>X</p>
       </div>
      </div>
    )
}

export default Mesagge;