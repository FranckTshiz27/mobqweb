import '../style/formControl.scss';
import '../style/inputfile.scss';
import {AiFillPicture} from 'react-icons/ai';


const FormFileControl = ({ id, label, type, placeholder }) => {
    return (
        <div class="mb-2 inputfile">
            <label for={id} class="form-label mylabel inputlabel">
                <div className='inputlabel__icon_container'>
                    <AiFillPicture/>
                </div>
                <h3>Télécharger votre logo</h3>
            </label>
            <input type='file' class="form-control" id={id} placeholder={placeholder} />
        </div>
    )

}

export default FormFileControl;