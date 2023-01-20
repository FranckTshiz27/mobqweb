import '../style/formControl.scss';
import '../style/inputfile.scss';
import {AiFillPicture} from 'react-icons/ai';


const FormFileControl = ({ id, label, type, placeholder }) => {
    return (
        <div className="mb-2 inputfile">
            <label htmlFor={id} className="form-label mylabel inputlabel">
                <div className='inputlabel__icon_container'>
                    <AiFillPicture/>
                </div>
                <h3>Télécharger votre logo</h3>
            </label>
            <input type='file' className="form-control" id={id} placeholder={placeholder} />
        </div>
    )

}

export default FormFileControl;