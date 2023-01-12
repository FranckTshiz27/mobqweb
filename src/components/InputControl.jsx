import '../style/formControl.scss';


const FormControl = ({ id, label, type, placeholder }) => {
    return (
        <div class="mb-3">
            <label for={id} class="form-label mylabel">{label}</label>
            <input type={type} class="form-control" id={id} placeholder={placeholder} />
        </div>
    )

}

export default FormControl;