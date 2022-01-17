import fede from './fede.jpg'
import piernas from './piernas.jpg'
import './Nueva.css'


const Nueva = ({setNueva}) =>{
    return(
        <div className="nueva">
            <div className='container-nueva'>
            <p className='title'>Las hermosa de todas ❤😍</p>
            <img src={piernas} alt='image'/>

            <p>Esta cara puse cuando vi la foto jajajaj 🤭🤤</p>
            <img src={fede}  alt='image'/>
            </div>
            <p onClick={()=> setNueva(false)} className='exit'>X</p>
        </div>
    )
}

export default Nueva