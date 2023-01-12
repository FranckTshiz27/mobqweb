import '../style/saveButton.scss';
const SaveButton = ({ type, label }) => {

    return (
        <button className='btn btn-primary saveButton' type={type}>
            {label}
        </button>
    )
}

export default SaveButton;