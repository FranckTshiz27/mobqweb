import '../style/saveButton.scss';
import Loader from './Loader';
const SaveButton = ({ type, label,isSaving,isEditing}) => {

    return (
        <button className='btn btn-primary saveButton' type={type} >
            {isSaving?<Loader/>:label}
        </button>
    )
}

export default SaveButton;