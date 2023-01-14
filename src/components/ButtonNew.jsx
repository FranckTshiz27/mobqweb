import '../style/buttonNew.scss';
import {FiPlus} from 'react-icons/fi';
const ButtonNew =({onClickShow})=>{

    const handleClickShow =()=>{
        onClickShow()
    }
    return(
        <button type="button" className="btn btn-primary buttonNew" data-bs-toggle="modal" 
        data-bs-target="#staticBackdrop" onClick={handleClickShow}>
           <FiPlus className='icon'/> Nouvelle organisation
        </button>
    )

}
export default ButtonNew;