import '../style/formControl.scss';

const TextAreaComponent = ({ id, label,number}) => {

    return (
        <div class="mb-2">
            <label htmlFor={id} class="form-label mylabel">{label}</label>
            <textarea class="form-control" id={id} rows={`${number}`}></textarea>
        </div>
    )

}

export default TextAreaComponent;