import '../style/cancelButton.scss';
const CancelButton = ({ type, label }) => {

    return (
        <button className='btn cancelButton' type={type}>
            {label}
        </button>
    )
}

export default CancelButton;