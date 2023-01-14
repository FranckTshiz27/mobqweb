import '../style/formControl.scss';


const FormControl = ({ id, label, type, placeholder,errors,register,name}) => {
    return (
        <div class="mb-2">
            <label htmlFor={id} class="form-label mylabel">{label}</label>
            <input type={type} class="form-control" id={id} placeholder={placeholder} {...register(name)}/>
            {errors[name] && (
                        <span className="error_message">
                            {errors[name].message}
                        </span>
                    )}
        </div>
    )

}

export default FormControl;