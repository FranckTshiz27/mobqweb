import '../style/formControl.scss';


const FormControl = ({ id, label, type, placeholder }) => {
    return (
        <div class="mb-2">
            <label htmlFor={id} class="form-label mylabel">{label}</label>
            <input type={type} class="form-control" id={id} placeholder={placeholder} />
        </div>
    )

}

export default FormControl;